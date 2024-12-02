import sharp from 'sharp'
import fsPromises from 'node:fs/promises'
import path from 'node:path'

const QUALITY_50 = 50
const QUALITY_80 = 80
const QUALITY_100 = 100
const ALLOWED_DIFF_RATIO = 0.0005 // 許容される差分の割合（0.05%） TODO: この値で適切か検討

// ローカルの画像の容量を最適化してリポジトリの容量を大幅に削減
export const optimizeImage = async (imagePath: string, width: number) => {
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

    // フォーマットに応じた変換
    let sizeChanged = false
    switch (metadata.format) {
      case 'jpeg':
      case 'jpg': {
        const outputBuffer = await transformer.jpeg({ quality: QUALITY_80 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.jpeg({ quality: QUALITY_80 })
          sizeChanged = true
        }
        break
      }
      case 'png': {
        const outputBuffer = await transformer.png({ quality: QUALITY_100 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.png({ quality: QUALITY_100 })
          sizeChanged = true
        }
        break
      }
      case 'webp': {
        const outputBuffer = await transformer.webp({ quality: QUALITY_80 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.webp({ quality: QUALITY_80 })
          sizeChanged = true
        }
        break
      }
      case 'jp2': {
        const outputBuffer = await transformer.jp2({ quality: QUALITY_80 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.jp2({ quality: QUALITY_80 })
          sizeChanged = true
        }
        break
      }
      case 'tiff': {
        const outputBuffer = await transformer.tiff({ quality: QUALITY_80 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.tiff({ quality: QUALITY_80 })
          sizeChanged = true
        }
        break
      }
      case 'avif': {
        const outputBuffer = await transformer.avif({ quality: QUALITY_50 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.avif({ quality: QUALITY_50 })
          sizeChanged = true
        }
        break
      }
      case 'heif': {
        const outputBuffer = await transformer.heif({ quality: QUALITY_50 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.heif({ quality: QUALITY_50 })
          sizeChanged = true
        }
        break
      }
      case 'jxl': {
        const outputBuffer = await transformer.jxl({ quality: QUALITY_80 }).toBuffer()
        if (
          Math.abs(outputBuffer.length - originalSize) >
          outputBuffer.length * ALLOWED_DIFF_RATIO
        ) {
          transformer = transformer.jxl({ quality: QUALITY_80 })
          sizeChanged = true
        }
        break
      }
      default:
        break
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
