// TODO: 設定を変更したときは、npm run prepareを実行しないと反映されないので注意
// npm run studioでデザインシステムを視覚化できます。
import { createColorSemanticTokens, createGradientSemanticTokens } from '@/config/panda/utils'
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
          primary: ['{colors.blue.700}', '{colors.blue.500}'], // #1d4ed8, #3b82f6
          secondary: ['{colors.gray.500}', '{colors.gray.300}'], // #6b7280, #d1d5db
          tertiary: ['{colors.pink.600}', '{colors.pink.400}'], // #db2777, #f472b6
          bg: {
            DEFAULT: ['{colors.white}', '{colors.neutral.900}'], // #ffffff, #171717
            header: ['{colors.neutral.200}', '{colors.neutral.800}'], // #e5e5e5, #262626
            footer: ['{colors.neutral.700}', '{colors.neutral.900}'], // #404040, #171717
          },
          text: {
            DEFAULT: ['{colors.neutral.800}', '{colors.neutral.200}'], // #262626, #e5e5e5
            link: ['{colors.blue.600}', '{colors.blue.400}'], // #2563eb, #60a5fa
            disabled: ['{colors.gray.600}', '{colors.gray.400}'], // #4b5563, #9ca3af
          },
          success: ['{colors.green.500}', '{colors.green.300}'], // #22c55e, #86efac
          warning: ['{colors.yellow.400}', '{colors.yellow.200}'], // #facc15 , #fef08a
          danger: ['{colors.red.600}', '{colors.red.400}'], // #dc2626, #f87171
          info: ['{colors.sky.500}', '{colors.sky.300}'], // ##0ea5e9, #7dd3fc
          border: ['{colors.gray.300}', '{colors.gray.700}'], // #d1d5db, #374151
          hover: ['{colors.blue.800}', '{colors.blue.600}'], // #1e40af, #2563eb
        }),
        gradients: createGradientSemanticTokens({
          // 元々の値
          // sample1: {
          //   value: {
          //     base: {
          //       type: 'linear',
          //       placement: 'to right',
          //       stops: [
          //         { color: '{colors.red.400}', position: 0 },
          //         { color: '{colors.blue.300}', position: 200 },
          //       ],
          //     },
          //     _osDark: {
          //       type: 'linear',
          //       placement: 'to right',
          //       stops: [
          //         { color: '{colors.yellow.200}', position: 0 },
          //         { color: '{colors.green.500}', position: 200 },
          //       ],
          //     },
          //   },
          // },
          sample1: [
            'linear',
            'to right',
            ['{colors.red.400}', '{colors.blue.300}'],
            ['{colors.yellow.200}', '{colors.green.500}'],
            [0, 200],
          ],
          sample2: [
            'linear',
            'to left',
            ['{colors.yellow.200}', '{colors.green.500}', '{colors.red.600}', '{colors.blue.800}'],
            ['{colors.green.500}', '{colors.yellow.200}', '{colors.blue.800}', '{colors.red.600}'],
          ],
          sample3: ['linear', 'to bottom', ['{colors.orange.500}', '{colors.purple.500}']],
          sample4: {
            DEFAULT: [
              'linear',
              'to right',
              ['{colors.red.600}', '{colors.blue.800}', '{colors.yellow.200}'],
              ['{colors.yellow.200}', '{colors.green.500}', '{colors.red.600}'],
              [80, 90, 100],
            ],
            sample5: [
              'linear',
              'to left',
              ['{colors.black}', '{colors.white}', '{colors.yellow.200}'],
              ['{colors.yellow.200}', '{colors.green.500}', '{colors.red.600}'],
              [30, 40, 50],
            ],
          },
          sample6: ['radial', 'circle', ['{colors.orange.500}', '{colors.purple.500}']],
          sample7: ['radial', 'ellipse', ['{colors.orange.500}', '{colors.purple.500}']],
        }),
      },
    },
  },
  globalCss,
})
