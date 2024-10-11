// TODO: 設定を変更したときは、npm run prepareを実行しないと反映されないので注意
// npm run studioでデザインシステムを視覚化できます。
import { createColorSemanticTokens } from '@/config/panda/utils'
import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  html: {
    '--global-font-body': 'Noto Sans JP',
    '--global-font-mono': 'Noto Sans Mono',
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
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  syntax: 'object-literal',
  validation: 'error',
  jsxFramework: 'react',
  jsxStyleProps: 'none',
  strictTokens: true,
  strictPropertyValues: true,
  outdir: 'styled-system',
  theme: {
    extend: {
      // モバイルファースト(@media(min-width))
      breakpoints: {
        sm: '500px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      tokens: {
        colors: {},
        fonts: {
          body: { value: 'Noto Sans JP' },
          mono: { value: 'Noto Sans Mono' },
        },
      },
      semanticTokens: {
        colors: createColorSemanticTokens({
          // [key]: [base, _osDark]
          // baseの値は必須で、他の使わない値には空文字列を設定
          primary: ['#0070f3', '#1e90ff'],
          secondary: ['#6A737D', '#9CA3AF'],
          tertiary: ['#FF4081', '#F06292'],
          bg: ['#ffffff', '#121212'],
          text: {
            DEFAULT: ['#333333', '#f5f5f5'],
            link: ['#007bff', '#82cfff'],
            disabled: ['#6c757d', '#828282'],
            test: {
              DEFAULT: ['#ffc107', '#ff6b6b'],
              disabled: ['#425', '#82cfff'],
            },
          },
          success: ['#28a745', '#3cb371'],
          warning: ['#ffc107', '#ffdd57'],
          danger: ['#dc3545', '#ff6b6b'],
          info: ['#17a2b8', '#63cdda'],
          border: ['#dddddd', '#444444'],
          hover: ['#0056b3', '#4a90e2'],
          headerBg: ['#f8f9fa', '#212529'],
          footerBg: ['#343a40', '#000000'],
        }),
      },
    },
  },
  globalCss,
})
