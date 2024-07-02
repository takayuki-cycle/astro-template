import panda from '@pandacss/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import astroParser from 'astro-eslint-parser'

const pandaRules = {
  ...Object.fromEntries(
    Object.entries(panda.configs.all.rules).map(([key, value]) => [
      key,
      value === 'warn' ? 'error' : value,
    ]),
  ),
  '@pandacss/prefer-longhand-properties': 'off',
  '@pandacss/prefer-composite-properties': 'off',
  '@pandacss/no-physical-properties': 'off',
}

const eslintConfig = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.astro'],
    ignores: ['*.d.ts', 'styled-system'],
    plugins: {
      '@pandacss': panda,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: pandaRules,
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: pandaRules,
  },
]

export default eslintConfig
