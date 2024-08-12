module.exports = {
  plugins: {
    '@textlint/markdown': {
      extensions: ['.mdx'],
    },
  },
  filters: {},
  rules: {
    'preset-ja-technical-writing': {
      'no-exclamation-question-mark': false,
      'ja-no-mixed-period': {
        periodMark: ['。', '笑', 'w', 'W', '…', '...'],
        allowEmojiAtEnd: true,
      },
      'sentence-length': {
        max: 150,
      },
      'ja-no-weak-phrase': false,
    },
    'no-surrogate-pair': true,
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    'ja-hiragana-keishikimeishi': true,
    'ja-hiragana-fukushi': true,
    'ja-hiragana-hojodoushi': true,
    '@textlint-ja/textlint-rule-no-insert-dropping-sa': true,
    'prefer-tari-tari': true,
    '@textlint-ja/no-synonyms': true,
    'ja-no-orthographic-variants': true,
  },
}
