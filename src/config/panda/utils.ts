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

/* // 11/2
type GradientTokenValue = [
  string, // type
  string, // placement
  string[], // baseStops
  string[], // osDarkStops (optional)
  number[]?, // positions (optional)
]

type GradientTokens = {
  [key: string]: GradientTokenValue | GradientTokens
}

type TokenResultAAA = {
  [key: string]: {
    value?: {
      base: {
        type: string
        placement: string
        stops: { color: string; position?: number }[]
      }
      _osDark: {
        type: string
        placement: string
        stops: { color: string; position?: number }[]
      }
    }
  } & {
    [nestedKey: string]: TokenResultAAA | { value: { base: any; _osDark: any } }
  }
}

export const createGradientSemanticTokens = (
  tokens: GradientTokens,
  parentKey = '',
): TokenResultAAA => {
  const createStops = (colors: string[] = [], positions: number[] = []) =>
    colors.map((color, index) => ({
      color,
      ...(positions[index] !== undefined ? { position: positions[index] } : {}),
    }))

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key

      if (Array.isArray(value)) {
        const [type, placement, baseStops, osDarkStops = [], positions = []] = value
        if (!type || !placement) {
          throw new Error(
            `The 'type' and 'placement' values for key '${currentKey}' cannot be empty.`,
          )
        }

        return [
          key,
          {
            value: {
              base: {
                type,
                placement,
                stops: createStops(baseStops, positions),
              },
              _osDark: {
                type,
                placement,
                stops: createStops(osDarkStops ?? [], positions ?? []),
              },
            },
          },
        ]
      }

      if (typeof value === 'object') {
        return [key, createGradientSemanticTokens(value, currentKey)]
      }

      return [key, {}]
    }),
  )
}
*/
