// TODO: 設定を変更したときは、npm run prepareを実行しないと反映されないので注意
// npm run studioでデザインシステムを視覚化できます。(このファイルに記載されていなくても、視覚化されたデザインシステムで記載されていれば適用できます。)
import {
  createColorSemanticTokens,
  createGradientSemanticTokens,
  createBorderSemanticTokens,
  createShadowSemanticTokens,
} from '@/config/panda/utils'
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
        // widthとheightで使用
        sizes: {
          full: { value: '100%' },
          min: { value: 'min-content' },
          max: { value: 'max-content' },
          fit: { value: 'fit-content' },
        },
        // paddingで使用
        spacing: {},
        fonts: {
          body: { value: 'Noto Sans JP' },
          mono: { value: 'Noto Sans Mono' },
        },
        fontSizes: {},
        fontWeights: {},
        letterSpacings: {},
        // 単位付き(rem)を用いることは非推奨
        lineHeights: {},
        // border radiusで使用
        radii: {
          none: { value: '0' },
        },
        // 使わないかも知れないです。
        borderWidths: {},
        easings: {
          // transition:
          //   プロパティ名?(transitionProperty: Globals | "all" | "none" | (string & {})) デフォルト値: all
          //   再生時間(transitionDuration)
          //   イージング関数?(transitionTimingFunction) デフォルト値: ease
          //   待ち時間?(transitionDelay) デフォルト値: 0s
          // cubic-bezier
          ease: { value: [0.25, 0.1, 0.25, 1] }, // 遷移の中間に向かって速度が増加し、最後には再び遅くなります。
          linear: { value: [0, 0, 1, 1] }, // 等速度で遷移します。
          easeIn: { value: [0.42, 0, 1, 1] }, // 最初はゆっくり始まり、完了するまで遷移速度が増加します。
          easeOut: { value: [0, 0, 0.58, 1] }, // 急速に遷移が始まり、遷移が続くにつれて速度が低下します。
          easeInOut: { value: [0.42, 0, 0.58, 1] }, // ゆっくりと遷移を開始し、速度が上がり、その後再び速度が低下します。
          // steps
          jumpStart4: { value: 'steps(4, jump-start)' }, // トランジションの開始時に最初のジャンプが発生します。
          jumpEnd4: { value: 'steps(4, jump-end)' }, // アニメーションの終了時に最後のジャンプが発生します。
          jumpNone4: { value: 'steps(4, jump-none)' }, // どちら側にもジャンプが発生しません。0%の位置と100%の位置の両方が長さの1/nだけ表示されます。
          jumpBoth4: { value: 'steps(4, jump-both)' }, // 0%と100%の両方で停止が含まれます。その結果、トランジションの時間内にステップが1つ追加されます。
          stepStart: { value: 'steps(1, start)' }, // 遷移が始まったときに最初のジャンプが発生します。(startとjump-startは同じ動作をします。)
          stepEnd: { value: 'steps(1, end)' }, // 最後のジャンプはアニメーションの終了時に発生します。(endとjump-endは同じ動作をします。)
          // グローバル値
          inherit: { value: 'inherit' }, // 親要素から設定を引き継ぎます。
          initial: { value: 'initial' }, // 初期値にリセットされます。(easeと同義のため、easeを優先的に使用)
          unset: { value: 'unset' }, // 継承可能: 親要素からのスタイルを引き継ぎます。継承不可能: そのプロパティの初期値にリセットされます。
        },
        opacity: {
          none: { value: 0 },
          light: { value: 0.1 },
          lighter: { value: 0.3 },
          medium: { value: 0.5 },
          dark: { value: 0.7 },
          heavy: { value: 0.9 },
          full: { value: 1 },
        },
        // 参照元: https://www.chakra-ui.com/docs/theming/z-index
        zIndex: {
          hide: { value: -1 }, // 装飾的な背景や視覚的に隠すべきだが完全に非表示にはしたくない要素
          auto: { value: 'auto' }, // 基本のレイアウト要素や背景の調整が不要な要素
          base: { value: 0 }, // 一般的なテキストや画像などのコンテンツ要素
          docked: { value: 10 }, // サイドバーや固定されたナビゲーションのようなドッキング要素
          dropdown: { value: 1000 }, // フォーム内のオートコンプリートリストやナビゲーションメニューの展開など、他の基本的なコンテンツの上に表示する必要がある要素
          sticky: { value: 1100 }, // ヘッダーやスクロール追従型のサイドバーなどスクロール時に位置が固定されるsticky要素
          banner: { value: 1200 }, // ユーザーへの重要な通知やプロモーションのバナーなど、目立たせる必要のある内容
          overlay: { value: 1300 }, // モーダルが表示される際に、ページ全体に薄暗い背景を追加し、ユーザーの注目をモーダルに集中
          modal: { value: 1400 }, // 確認ダイアログ、ポップアップウィンドウなどページ内で最も重要な情報を表示するため、他の要素を隠して目立たせる目的
          popover: { value: 1500 }, // フォームフィールドのヘルプメッセージや、アイコンの詳細情報など
          skipNav: { value: 1600 }, // スキップリンク（ページ内ナビゲーションをスキップするためのリンク）に使用
          toast: { value: 1700 }, // 成功、エラーメッセージ、警告通知(トースト通知)に適用
          tooltip: { value: 1800 }, // ボタンやアイコンにホバーした際の説明(ツールチップ)テキスト
          max: { value: 2147483647 }, // 最高優先度の警告メッセージや一時的なシステムアラートのように絶対に他の要素に隠れてはいけない場合
        },
        durations: {
          // 'fastest': 50ms | 'faster': 100ms | 'fast': 150ms | 'normal': 200ms | 'slow': 300ms | 'slower': 400ms | 'slowest': 500ms
        },
        animations: {
          // "spin": spin 1s linear infinite | "ping": ping 1s cubic-bezier(0, 0, 0.2, 1) infinite | "pulse": pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite | "bounce": bounce 1s infinite
        },
      },
      semanticTokens: {
        colors: createColorSemanticTokens({
          // [key]: [base, _osDark(任意)]
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
        borders: createBorderSemanticTokens({
          // [key]: [border-width(rem), border-style, [base, _osDark(任意)]
          // 元々の値
          // border1: {
          //   value: {
          //     base: { width: '0.0625rem', style: 'dotted', color: '{colors.black}' },
          //     _osDark: { width: '0.0625rem', style: 'dotted', color: '{colors.red.200}' },
          //   },
          // },
          border1: [0.0625, 'dotted', ['black', 'red.600']],
          border2: [0.125, 'dashed', ['blue.400']],
          border3: {
            DEFAULT: [0.1875, 'solid', ['yellow.400', 'yellow.200']],
            border4: [0.25, 'double', ['green.700', 'green.200']],
          },
          border5: {
            DEFAULT: [0.3125, 'groove', ['purple.400']],
            border6: [0.375, 'ridge', ['orange.400', '']],
            border7: [0.5, 'inset', ['pink.400', 'sky.400']],
          },
        }),
        shadows: createShadowSemanticTokens({
          // [key]: [offsetX(rem), offsetY(rem), blur(rem), spread(rem), [base, _osDark(任意)], inset(任意、省略でoutset)]
          // composite valueではnumber型の単位がpxになるので、multiple string valuesを用いて単位でremが使えるようにしています。
          // 元々の値
          // shadow1: {
          //   value: {
          //     base: [
          //       '0.0625rem 0.0625rem 0.125rem 0.125rem {colors.green.800} inset',
          //       '0.1875rem 0.1875rem 0.25rem 0.25rem {colors.rose.300}',
          //       '0.3125rem 0.3125rem 0.375rem 0.375rem {colors.purple.300} inset',
          //     ],
          //     _osDark: [
          //       '0.0625rem 0.0625rem 0.125rem 0.125rem {colors.yellow.400} inset',
          //       '0.1875rem 0.1875rem 0.25rem 0.25rem {colors.lime.900}',
          //       '0.3125rem 0.3125rem 0.375rem 0.375rem {colors.zinc.700} inset',
          //     ],
          //   },
          // },
          shadow1: [
            [0.0625, 0.0625, 0.125, 0.125, ['green.800', 'yellow.400'], 'inset'],
            [0.1875, 0.1875, 0.25, 0.25, ['rose.300', 'lime.900']],
            [0.3125, 0.3125, 0.375, 0.375, ['purple.300', 'zinc.700'], 'inset'],
          ],
          shadow2: [0.0625, 0.0625, 0.125, 0.125, ['green.800']],
          shadow3: [0.375, 0.3125, 0.25, 0.1875, ['zinc.900', 'purple.900']],
          shadow4: {
            DEFAULT: [0.3125, 0.3125, 0.375, 0.375, ['black', ''], 'inset'],
            shadow5: {
              DEFAULT: [
                [0.0625, 0.125, 0.1875, 0.25, ['amber.600', 'yellow.500']],
                [0.1875, 0.1875, 0.25, 0.25, ['rose.700', 'lime.600']],
                [0.3125, 0.3125, 0.375, 0.375, ['orange.50', 'orange.700'], 'inset'],
              ],
              shadow6: [0.375, 0.3125, 0.25, 0.1875, ['red.900', 'purple.900']],
            },
          },
        }),
        // background-imageではImageコンポーネントによる画像最適化が使えないので、assetsは使わないでください。
        assets: {},
      },
    },
  },
  globalCss,
})
