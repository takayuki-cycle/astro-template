import sharp from 'sharp'
import fsPromises from 'node:fs/promises'
import path from 'node:path'

//// const UPDATE_THRESHOLD = 10000 // 10秒
const QUALITY_50 = 50
const QUALITY_80 = 80

// ローカルの画像の容量を最適化してリポジトリの容量を大幅に削減
export const optimizeImage = async (imagePath: string, width: number) => {
  const maxDensityWidth = width * 4
  const backupPath = `${imagePath}.backup`
  const tempPath = path.join(path.dirname(imagePath), `temp_${path.basename(imagePath)}`)

  try {
    //// ファイルの最終更新時刻を取得
    //// const fileStats = await fsPromises.stat(imagePath)
    //// const lastModified = fileStats.mtimeMs
    //// const currentTime = Date.now()

    //// 更新時刻からUPDATE_THRESHOLD以内の場合はスキップ(スキップしないと永遠に画像最適化を実行するからです。)
    //// if (currentTime - lastModified < UPDATE_THRESHOLD) return

    // 元の画像をバックアップ
    await fsPromises.copyFile(imagePath, backupPath)

    // 画像のメタデータを取得
    const metadata = await sharp(imagePath).metadata()
    let transformer = sharp(imagePath)

    // 幅が最大密度幅(4倍)を超えている場合はリサイズ
    if (metadata.width !== undefined && metadata.width > maxDensityWidth) {
      transformer = transformer.resize(maxDensityWidth)
    }

    // フォーマットに応じた変換
    switch (metadata.format) {
      case 'jpeg':
      case 'jpg':
        transformer = transformer.jpeg({ quality: QUALITY_80 })
        break
      case 'png':
        transformer = transformer.png({ quality: QUALITY_80 })
        break
      case 'webp':
        transformer = transformer.webp({ quality: QUALITY_80 })
        break
      case 'jp2':
        transformer = transformer.jp2({ quality: QUALITY_80 })
        break
      case 'tiff':
        transformer = transformer.tiff({ quality: QUALITY_80 })
        break
      case 'avif':
        transformer = transformer.avif({ quality: QUALITY_50 })
        break
      case 'heif':
        transformer = transformer.heif({ quality: QUALITY_50 })
        break
      case 'jxl':
        transformer = transformer.jxl({ quality: QUALITY_80 })
        break
      default:
        break
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
