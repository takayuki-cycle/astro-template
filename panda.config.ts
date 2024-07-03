import { defineConfig } from '@pandacss/dev'

// TODO: 設定を変更したときは、npm run prepareを実行しないと反映されないので注意
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: 'react',

  // strictTokens: true, // UIコンポーネントライブラリを使わない選択をするのであれば、この行を使う可能性あり  トークン値だけ使用可能(px, rem, blueなどは使用不可)
  strictPropertyValues: true,

  // The output directory for your css system
  outdir: 'styled-system',
})
