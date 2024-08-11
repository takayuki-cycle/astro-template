module.exports = {
  plugins: {
    '@textlint/markdown': {
      extensions: ['.mdx'],
    },
  },
  filters: {},
  rules: {
    'no-todo': true, // TODO: このルールを削除して、他のルールを追加すること
  },
}
