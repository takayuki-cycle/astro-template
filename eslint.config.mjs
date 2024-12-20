import panda from '@pandacss/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import astroParser from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'

const styledCss = 'css|cx|cva|sva'
const styledPatterns =
  'box|flex|stack|vstack|hstack|spacer|square|circle|center|link-overlay|aspect-ratio|grid|grid-item|wrap|container|divider|float|bleed|visually-hidden|cq'
const styledCalleeName = `${styledCss}|${styledPatterns}`

const createNoRestrictedSyntax = (type, rules) =>
  rules.map(([property, suggestion]) => {
    const selectors = {
      styled: `CallExpression[callee.name=/^(${styledCalleeName})$/] Property[key.name='${property}'][value.type!='ObjectExpression']`,
      htmlTag: `JSXOpeningElement[name.name='${property}']`,
      attribute: `JSXAttribute[name.name='${property}']`
    }

    return {
      selector: selectors[type],
      message: `'${property}' は使用しないでください。${suggestion ? `代わりに '${suggestion}' にしてください。` : '非推奨です。'}`
    }
  })

const pandaRules = {
  ...Object.fromEntries(
    Object.entries(panda.configs.all.rules).map(([key, value]) => [
      key,
      value === 'warn' ? 'error' : value
    ])
  ),
  '@pandacss/no-physical-properties': 'off',
  '@pandacss/prefer-longhand-properties': 'off',
  '@pandacss/prefer-atomic-properties': 'off', // コードが長くなりすぎる場合のみ、compositeプロパティを使用(例えば、borderをatomicで記述すると12個になってしまう場合など)
  '@pandacss/prefer-composite-properties': 'off'
}

const eslintConfig = [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  {
    files: ['**/*.{js,jsx,ts,tsx,astro}'],
    ignores: ['*.d.ts', 'node_modules/**', 'styled-system', '.astro/**', 'dist/**', '.vercel/**'],
    plugins: {
      '@pandacss': panda
    },
    languageOptions: {
      parser: typescriptParser
    },
    rules: {
      ...pandaRules,
      'no-duplicate-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*'],
              message: "絶対パスでインポートしてください。例: '@/components/toc/types'"
            }
          ],
          paths: [
            {
              name: 'astro:assets',
              importNames: ['Image', 'Picture'],
              message:
                '代わりにローカルにある画像最適化付きの同名のコンポーネントを使用してください。'
            }
          ]
        }
      ],
      'no-restricted-syntax': [
        'error',
        // Panda CSSで特定のプロパティ名の使用を禁止
        // ['使用を禁止したいプロパティ名', '代わりに提案したい方法'](代わりに提案したい方法がなければ、''にしてください。)
        // 使用を禁止するプロパティ名は、https://developer.mozilla.org/ja/docs/Web/CSS を参考にしました。
        ...createNoRestrictedSyntax('styled', [
          ['bgImage', 'Imageコンポーネント'],
          ['float', 'flexboxやgridレイアウト'],
          ['clip', 'clipPath'],
          ['boxAlign', ''],
          ['boxDirection', ''],
          ['boxFlex', ''],
          ['boxFlexGroup', ''],
          ['boxLines', ''],
          ['boxOrdinalGroup', ''],
          ['boxOrient', ''],
          ['boxPack', '']
        ]),
        // 特定のHTMLタグの使用を禁止
        // ['使用を禁止したいHTMLタグ', '代わりに提案したい方法'](代わりに提案したい方法がなければ、''にしてください。)
        // Markuplintで<font>、<center>、<marquee>、<frameset>、<frame>、<noframes>、<big>、<applet>、<blink>、<strike>、<rb>、<rtc>、<acronym>、<basefont>、<bgsound>、<dir>、<isindex>、<keygen>、<listing>、<marquee>、<menuitem>、<nobr>、<noembed>、<plaintext>、<tt>、<xmp>の使用は、既に禁止されています。
        // <small>は補足情報で使用するので、禁止にはしていません。
        ...createNoRestrictedSyntax('htmlTag', [
          ['b', '<strong>または<em>またはスタイルで太字'],
          ['i', '<em>または<cite>またはスタイルで斜体'],
          ['u', '<mark>または<abbr>またはスタイルで下線'],
          ['s', '<del>または<ins>またはスタイルで打ち消し線'],
          ['hgroup', '<header>または<section>または<div>にARIA属性'],
          ['command', '<menu>または<button>または<kbd>または<ul>または<ol>または<span>'],
          ['style', 'Panda CSS']
          // ['img', 'Imageコンポーネント'], // TODO: いずれ適用
        ]),
        // 特定のHTML属性の使用を禁止
        ...createNoRestrictedSyntax('attribute', [['style', 'Panda CSS']]),
        {
          selector: `ObjectExpression:has(Property[key.name='overflow'][value.value='auto']):not(:has(Property[key.name='overscrollBehaviorBlock'][value.value='contain']))`,
          message: `'overflow: auto' を使用する場合は、 'overscrollBehaviorBlock: 'contain'' を設定してください。ラバーバンドスクロールによる意図しない操作を防ぐためです。`
        },
        {
          selector: `ObjectExpression:has(Property[key.name='overflow'][value.value='scroll']):not(:has(Property[key.name='overscrollBehaviorBlock'][value.value='contain']))`,
          message: `'overflow: scroll' を使用する場合は、 'overscrollBehaviorBlock: 'contain'' を設定してください。ラバーバンドスクロールによる意図しない操作を防ぐためです。`
        },
        {
          selector: `Property[key.name='_hover']:not(:has(ObjectExpression > Property[key.value='@media (any-hover: hover)']))`,
          message: `'_hover' を使用する場合は '@media (any-hover: hover)' を入れ子にしてください。\nタップ後にhoverの状態が継続してUIの予期しない振る舞いを防ぐためです。\n例: '_hover: { '@media (any-hover: hover)': { bgColor: 'hover.bg' } }'`
        },
        {
          selector: `ObjectExpression:has(Property[key.name='_hover']):not(:has(Property[key.name='_focusVisible'])) > Property[key.name='_hover']`,
          message: `'_hover' を使用する場合は '_focusVisible' を隣接セレクタで定義してください。\nキーボードで操作するときにフォーカスされている要素を明確に示すためです。(特に指定がなければホバーのスタイルを流用してください。)\n例: '_hover: { '@media (any-hover: hover)': { bgColor: 'hover.bg' } }, _focusVisible: { bgColor: 'hover.bg' }'`
        }
      ]
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: ['.astro']
      }
    },
    rules: pandaRules
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules
    }
  }
]

export default eslintConfig
