import type { ColorTokens, TokenResult } from '@/config/panda/types'

export const createColorSemanticTokens = (tokens: ColorTokens, parentKey = ''): TokenResult =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key

      if (Array.isArray(value)) {
        const [base, osDark] = value // 値を追加するときはここへ追加
        if (base === '') {
          throw new Error(
            `The 'base' color value for key '${currentKey}' cannot be an empty string.`,
          )
        }
        return [key, { value: { base, _osDark: osDark } }] // 値を追加するときはここへ追加
      }
      if (typeof value === 'object') {
        return [key, createColorSemanticTokens(value, currentKey)]
      }

      return [key, {}]
    }),
  )
