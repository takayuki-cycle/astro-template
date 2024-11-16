import type { Border, Gradient, Shadow } from '@pandacss/types'
import type {
  ColorPath,
  BorderStyle,
  ColorArray,
  Tokens,
  ColorValue,
  TokenResult,
  GradientValue,
  BorderValue,
  ShadowValue,
  ShadowArray,
} from '@/config/panda/types'

export const createColorSemanticTokens = (tokens: Tokens<ColorArray>): TokenResult<ColorValue> =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      if (Array.isArray(value)) {
        const [base, osDark = base] = value // 値を追加するときはここへ追加
        return [key, { value: { base: `{colors.${base}}`, _osDark: `{colors.${osDark}}` } }] // 値を追加するときはここへ追加
      }
      if (typeof value === 'object') {
        return [key, createColorSemanticTokens(value)]
      }

      return [key, {}]
    }),
  )

export const createGradientSemanticTokens = (
  tokens: Tokens<GradientValue>,
): TokenResult<Gradient> => {
  const createStops = (colors: ColorPath[] = [], positions: number[] = []) =>
    positions.length > 0
      ? colors.map((color, index) => ({
          color: `{colors.${color}}`,
          ...(positions[index] !== undefined ? { position: positions[index] } : {}),
        }))
      : colors.map((color) => `{colors.${color}}`)

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
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
        return [key, createGradientSemanticTokens(value)]
      }

      return [key, {}]
    }),
  )
}

export const createBorderSemanticTokens = (tokens: Tokens<BorderValue>): TokenResult<Border> => {
  const createBorder = (width: number, style: BorderStyle, colors: ColorArray) => ({
    width: `${width}rem`,
    style,
    color: `{colors.${colors[0]}}`,
    ...(colors[1] && { _osDark: `{colors.${colors[1]}}` }),
  })

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      if (Array.isArray(value)) {
        const [width, style, colors] = value

        return [
          key,
          {
            value: {
              base: createBorder(width, style, colors),
              ...(colors.length > 1 &&
                colors[1] !== '' && {
                  _osDark: createBorder(width, style, [colors[1] || colors[0]]),
                }),
            },
          },
        ]
      }

      if (typeof value === 'object' && value !== null) {
        return [key, createBorderSemanticTokens(value)]
      }

      return [key, {}]
    }),
  )
}

export const createShadowSemanticTokens = (tokens: Tokens<ShadowValue>): TokenResult<Shadow> => {
  const createShadow = (value: ShadowArray) => {
    const shadowValue = (color: string) =>
      `${offsetX}rem ${offsetY}rem ${blur}rem ${spread}rem {colors.${color}} ${inset}`
    const [offsetX, offsetY, blur, spread, colors, inset = ''] = value

    return {
      base: shadowValue(colors[0]),
      ...(colors[1] && {
        _osDark: shadowValue(colors[1]),
      }),
    }
  }

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      if (Array.isArray(value)) {
        if (Array.isArray(value[0])) {
          return [
            key,
            {
              value: {
                base: (value as ShadowArray[])
                  .map((shadowValue) => createShadow(shadowValue).base)
                  .join(', '),
                _osDark: (value as ShadowArray[])
                  .map((shadowValue) =>
                    shadowValue[4][1] ? createShadow(shadowValue)._osDark : null,
                  )
                  .filter(Boolean)
                  .join(', '),
              },
            },
          ]
        }

        return [key, { value: createShadow(value as ShadowArray) }]
      }

      if (typeof value === 'object' && value !== null) {
        return [key, createShadowSemanticTokens(value)]
      }

      return [key, {}]
    }),
  )
}
