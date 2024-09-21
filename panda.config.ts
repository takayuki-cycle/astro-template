import { defineConfig } from '@pandacss/dev'

// TODO: 設定を変更したときは、npm run prepareを実行しないと反映されないので注意
export default defineConfig({
  preflight: true, // リセットCSSを適用
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', '@park-ui/panda-preset'],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  validation: 'error',
  jsxFramework: 'react',
  // jsxStyleProps: 'none', // TODO: コメントアウトしてビルドしたときに警告が出なければ、この行を使ってください。
  strictTokens: true, // UIコンポーネントライブラリを使わない選択をするのであれば、この行を使う可能性あり  トークン値だけ使用可能(px, rem, blueなどは使用不可)
  strictPropertyValues: true,
  outdir: 'styled-system',
  globalFontface: {
    /* TODO: フォントを追加する場合は、このコメントアウトを外してください。
    Inter: {
      src: "url(/fonts/inter.woff2) format('woff2')",
      fontWeight: '400',
      fontStyle: 'normal',
    },
    Roboto: {
      src: "url(/fonts/roboto.woff2) format('woff2')",
      fontWeight: '400',
      fontStyle: 'normal',
    },
    */
  },
  theme: {
    extend: {},
  },
  globalCss: {
    strong: {
      fontWeight: 'normal',
    },
    textarea: { resize: 'none' },
    summary: {},
  },
})
