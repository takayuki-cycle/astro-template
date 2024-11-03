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
          primary: ['blue.700', 'blue.500'], // #1d4ed8, #3b82f6
          secondary: ['gray.500', 'gray.300'], // #6b7280, #d1d5db
          tertiary: ['pink.600', 'pink.400'], // #db2777, #f472b6
          bg: {
            DEFAULT: ['white', 'neutral.900'], // #ffffff, #171717
            header: ['neutral.200', 'neutral.800'], // #e5e5e5, #262626
            footer: ['neutral.700', 'neutral.900'], // #404040, #171717
          },
          text: {
            DEFAULT: ['neutral.800', 'neutral.200'], // #262626, #e5e5e5
            link: ['blue.600', 'blue.400'], // #2563eb, #60a5fa
            disabled: ['gray.600', 'gray.400'], // #4b5563, #9ca3af
          },
          success: ['green.500', 'green.300'], // #22c55e, #86efac
          warning: ['yellow.400', 'yellow.200'], // #facc15 , #fef08a
          danger: ['red.600', 'red.400'], // #dc2626, #f87171
          info: ['sky.500', 'sky.300'], // ##0ea5e9, #7dd3fc
          border: ['gray.300', 'gray.700'], // #d1d5db, #374151
          hover: ['blue.800', 'blue.600'], // #1e40af, #2563eb
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
            'linear', // type(baseと_osDarkで同じ値を使います。)
            'to right', // placement(baseと_osDarkで同じ値を使います。)
            ['red.400', 'blue.300'], // stops -> color(base)(color(base)とcolor(_osDark)とpositionの要素数は同じにしてください。)
            ['yellow.200', 'green.500'], // stops -> color(_osDark)
            [0, 200], // stops -> position(baseと_osDarkで同じ値を使います。単位はpxで、それぞれの数字の間隔にグラデーションがかかります。)
          ],
          sample2: [
            'linear',
            'to left',
            ['yellow.200', 'green.500', 'red.600', 'blue.800'],
            ['green.500', 'yellow.200', 'blue.800', 'red.600'],
          ],
          sample3: ['linear', 'to bottom', ['orange.500', 'purple.500']],
          sample4: {
            DEFAULT: [
              'linear',
              'to right',
              ['red.600', 'blue.800', 'yellow.200'],
              ['yellow.200', 'green.500', 'red.600'],
              [80, 90, 100],
            ],
            sample5: [
              'linear',
              'to left',
              ['black', 'white', 'yellow.200'],
              ['yellow.200', 'green.500', 'red.600'],
              [30, 40, 50],
            ],
          },
          sample6: ['radial', 'circle', ['orange.500', 'purple.500']],
          sample7: ['radial', 'ellipse', ['orange.500', 'purple.500']],
        }),
      },
    },
  },
  globalCss,
})
