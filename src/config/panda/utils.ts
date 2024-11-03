import type {
  ColorTokens,
  ColorTokenResult,
  GradientTokens,
  GradientTokenResult,
  ColorPath,
} from '@/config/panda/types'

export const createColorSemanticTokens = (tokens: ColorTokens, parentKey = ''): ColorTokenResult =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key
      if (Array.isArray(value)) {
        const [base, osDark = base] = value // 値を追加するときはここへ追加
        return [key, { value: { base, _osDark: osDark } }] // 値を追加するときはここへ追加
      }
      if (typeof value === 'object') {
        return [key, createColorSemanticTokens(value, currentKey)]
      }

      return [key, {}]
    }),
  )

export const createGradientSemanticTokens = (
  tokens: GradientTokens,
  parentKey = '',
): GradientTokenResult => {
  const createStops = (colors: ColorPath[] = [], positions: number[] = []) =>
    positions.length > 0
      ? colors.map((color, index) => ({
          color,
          ...(positions[index] !== undefined ? { position: positions[index] } : {}),
        }))
      : colors

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key
      if (Array.isArray(value)) {
        const [type, placement, baseStops, osDarkStops = [], positions = []] = value

        return [
          key,
          {
            value: {
              base: {
                type,
                placement,
                stops: createStops(baseStops, positions),
              },
              ...(osDarkStops.length > 0 && {
                _osDark: {
                  type,
                  placement,
                  stops: createStops(osDarkStops, positions),
                },
              }),
            },
          },
        ]
      }

      if (typeof value === 'object' && value !== null) {
        return [key, createGradientSemanticTokens(value, currentKey)]
      }

      return [key, {}]
    }),
  )
}
