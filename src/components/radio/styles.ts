import { cva, type RecipeVariantProps } from '@/../styled-system/css'
import type { DurationToken, EasingToken } from '@/../styled-system/tokens/tokens'

export type Variants = RecipeVariantProps<typeof style>

type Color = BaseColor
type ColorHover = `${BaseColor}.hover`
type ColorActive = `${BaseColor}.active`
type BaseColor = 'primary' | 'secondary' | 'tertiary'

const colorVariants = (color: Color, colorHover: ColorHover, colorActive: ColorActive) => {
  const transitionDuration: DurationToken = 'normal'
  const transitionTimingFunction: EasingToken = 'ease'

  return {
    transitionProperty: 'background-color, outline-color',
    transitionDuration,
    transitionTimingFunction,
    _hover: {
      '@media (any-hover: hover)': { bgColor: colorHover }
    },
    _focusVisible: { bgColor: colorHover },
    _checked: {
      ringColor: color,
      _after: { bgColor: color }
    },
    _active: { '&:active': { bgColor: colorActive } }
  }
}

export const style = cva({
  base: {
    pos: 'relative',
    flexShrink: '0',
    w: '6',
    h: '6',
    rounded: 'full',
    ringWidth: '3',
    ringOffset: '-0.75',
    outlineStyle: 'solid',
    _after: {
      pos: 'absolute',
      content: '""',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      rounded: 'full'
    }
  },
  variants: {
    color: {
      primary: colorVariants('primary', 'primary.hover', 'primary.active'),
      secondary: colorVariants('secondary', 'secondary.hover', 'secondary.active'),
      tertiary: colorVariants('tertiary', 'tertiary.hover', 'tertiary.active'),
      none: {}
    },
    preview: {
      skeleton: {
        ringColor: 'skeleton',
        animation: 'pulse',
        '&[data-inner-circle="true"]::after': {
          bgColor: 'skeleton',
          w: '3',
          h: '3'
        }
      },
      none: {
        appearance: 'none',
        cursor: 'pointer',
        ringColor: 'unchecked',
        _after: {
          w: '0',
          h: '0',
          transitionProperty: 'width, height, background-color',
          transitionDuration: 'normal',
          transitionTimingFunction: 'ease'
        },
        _checked: {
          _after: {
            w: '3',
            h: '3'
          }
        }
      }
    }
  },
  defaultVariants: { color: 'primary', preview: 'none' }
})
