import panda from '@pandacss/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

const eslintConfig = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['*.d.ts', 'styled-system'],
    plugins: {
      '@pandacss': panda,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      ...Object.fromEntries(
        Object.entries(panda.configs.all.rules).map(([key, value]) => [
          key,
          value === 'warn' ? 'error' : value,
        ]),
      ),
      '@pandacss/prefer-longhand-properties': 'off',
      '@pandacss/prefer-composite-properties': 'off',
      '@pandacss/prefer-unified-property-style': 'off',
      '@pandacss/no-physical-properties': 'off',
    },
  },
]

export default eslintConfig
