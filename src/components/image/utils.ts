import sharp from 'sharp'
import fsPromises from 'node:fs/promises'
import path from 'node:path'

type SharpTransformFunction = (options: { quality: number }) => sharp.Sharp

const QUALITY_LOW = 50
const QUALITY_MEDIUM = 80
const QUALITY_HIGH = 100 // TODO: この値で適切か検討
const ALLOWED_DIFF_RATIO = 0.0005 // 許容される差分の割合（0.05%） TODO: この値で適切か検討

const FORMAT_QUALITY_MAP: Record<string, { quality: number; method: keyof sharp.Sharp }> = {
  jpeg: { quality: QUALITY_MEDIUM, method: 'jpeg' },
  jpg: { quality: QUALITY_MEDIUM, method: 'jpeg' },
  png: { quality: QUALITY_HIGH, method: 'png' },
  webp: { quality: QUALITY_MEDIUM, method: 'webp' },
  jp2: { quality: QUALITY_MEDIUM, method: 'jp2' },
  tiff: { quality: QUALITY_MEDIUM, method: 'tiff' },
  avif: { quality: QUALITY_LOW, method: 'avif' },
  heif: { quality: QUALITY_LOW, method: 'heif' },
  jxl: { quality: QUALITY_MEDIUM, method: 'jxl' }
}

// ローカルの画像の容量を最適化してリポジトリの容量を大幅に削減
export const optimizeImage = async (
  src: string | ImageMetadata | Promise<{ default: ImageMetadata }>,
  width: number
) => {
  const fullPath = (src as { src: string }).src
  const match = fullPath.match(
    /src\/[^?]+\.(jpg|jpeg|png|webp|gif|tiff|avif|heif|jp2|jxl)/
  ) as RegExpMatchArray
  const imagePath = match[0]

  const maxDensityWidth = width * 4
  const backupPath = `${imagePath}.backup`
  const tempPath = path.join(path.dirname(imagePath), `temp_${path.basename(imagePath)}`)

  try {
    // 元の画像をバックアップ
    await fsPromises.copyFile(imagePath, backupPath)

    // 画像のメタデータを取得
    const metadata = await sharp(imagePath).metadata()
    let transformer = sharp(imagePath)

    // 幅が最大密度幅(4倍)を超えている場合はリサイズ
    if (metadata.width !== undefined && metadata.width > maxDensityWidth) {
      transformer = transformer.resize(maxDensityWidth)
    }

    // 元のファイルサイズを取得
    const originalSize = (await fsPromises.stat(imagePath)).size

    // フォーマットに応じてsharpのqualityの処理がされていなければ実行
    let sizeChanged = false
    if (metadata.format && FORMAT_QUALITY_MAP[metadata.format]) {
      const formatQuality = FORMAT_QUALITY_MAP[metadata.format]
      if (formatQuality) {
        const { quality, method } = formatQuality
        const outputBuffer = await (transformer[method] as SharpTransformFunction)({
          quality
        }).toBuffer()
        const isExceedsAllowedSizeDiff =
          Math.abs(outputBuffer.length - originalSize) > outputBuffer.length * ALLOWED_DIFF_RATIO
        if (isExceedsAllowedSizeDiff) {
          transformer = (transformer[method] as SharpTransformFunction)({
            quality
          })
          sizeChanged = true
        }
      }
    }

    // サイズ変更がない場合、処理を終了 = sharpのqualityで既に最適化されていたということです。
    if (!sizeChanged) {
      await fsPromises.unlink(backupPath)
      return
    }

    // 一時ファイルに変換結果を保存
    const outputBuffer = await transformer.toBuffer()
    await fsPromises.writeFile(tempPath, new Uint8Array(outputBuffer))

    // 一時ファイルを元のパスに上書き
    await fsPromises.rename(tempPath, imagePath)

    // バックアップを削除
    await fsPromises.unlink(backupPath)
  } catch {
    // エラーが発生した場合はバックアップを復元
    if (
      await fsPromises
        .access(backupPath)
        .then(() => true)
        .catch(() => false)
    ) {
      await fsPromises.rename(backupPath, imagePath)
    }

    // 一時ファイルを削除
    await fsPromises.unlink(tempPath)
  }
}
