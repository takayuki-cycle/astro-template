import sharp from 'sharp'
import fsPromises from 'node:fs/promises'
// import fsBasic from 'node:fs'
import path from 'node:path'

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

    // フォーマットに応じた変換
    switch (metadata.format) {
      case 'jpeg':
      case 'jpg':
        transformer = transformer.jpeg({ quality: 80 })
        break
      case 'png':
        transformer = transformer.png({ quality: 80 })
        break
      case 'webp':
        transformer = transformer.webp({ quality: 80 })
        break
      case 'jp2':
        transformer = transformer.jp2({ quality: 80 })
        break
      case 'tiff':
        transformer = transformer.tiff({ quality: 80 })
        break
      case 'avif':
        transformer = transformer.avif({ quality: 80 })
        break
      case 'heif':
        transformer = transformer.heif({ quality: 80 })
        break
      case 'jxl':
        transformer = transformer.jxl({ quality: 80 })
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
