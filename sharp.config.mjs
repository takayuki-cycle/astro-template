// 画像最適化モジュール
import sharp from 'sharp'

// sharp('dummy-input.jpg').resize(600, 400).toFile('dummy-output.webp')

sharp('dummy-input.jpg')
  .metadata()
  .then((metadata) => {
    console.log(metadata)
    /* console.log 結果
      {
        format: 'png',
        width: 1200,
        height: 800,
        space: 'srgb',
        channels: 3,
        depth: 'uchar',
        density: 72,
        isProgressive: false,
        paletteBitDepth: 8,
        hasProfile: false,
        hasAlpha: false
      }
    */
  })
