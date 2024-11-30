import sharp from 'sharp'
import fs from 'node:fs'

const THRESHOLD_SIZE = 512000 // 500KB

sharp('dummy-input.jpg')
  .metadata()
  .then((metadata) => {
    // ファイルサイズの取得
    const stats = fs.statSync('dummy-input.jpg')
    const fileSizeInBytes = stats.size

    console.log('画像メタデータ:', metadata)
    console.log('ファイルサイズ(バイト):', fileSizeInBytes)

    if (fileSizeInBytes > THRESHOLD_SIZE) {
      console.log('警告: ファイルサイズが500KBを超えています。圧縮が必要です。')

      // 圧縮処理の例
    } else {
      console.log('ファイルサイズは適切です。')
    }
  })
