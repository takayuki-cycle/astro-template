// TODO: 設定を変更したときは、npm run prepareを実行しないと反映されないので注意
import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  html: {
    '--global-font-body': 'Noto Sans JP',
    // '--global-font-mono': 'Mononoki Nerd Font, monospace',
    fontOpticalSizing: 'auto',
  },
  strong: {
    fontWeight: 'normal',
  },
  textarea: { resize: 'none' },
  summary: {},
})

export default defineConfig({
  preflight: true, // リセットCSSを適用
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', '@park-ui/panda-preset'],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  // validation: 'error',
  jsxFramework: 'react',
  // jsxStyleProps: 'none', // TODO: コメントアウトしてビルドしたときに警告が出なければ、この行を使ってください。
  // strictTokens: true, // UIコンポーネントライブラリを使わない選択をするのであれば、この行を使う可能性あり  トークン値だけ使用可能(px, rem, blueなどは使用不可)
  strictPropertyValues: true,
  outdir: 'styled-system',
  theme: {
    extend: {},
  },
  globalCss,
})
