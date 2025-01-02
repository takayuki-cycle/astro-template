import { cva, type RecipeVariantProps } from '@/../styled-system/css'
import { visibilityHidden } from '@/config/panda/creators/apply'
import type { DurationToken, EasingToken } from '@/../styled-system/tokens/tokens'

export type Variants = RecipeVariantProps<typeof style>

const colorVariants = (color: 'primary' | 'secondary' | 'tertiary') => {
  const transitionDuration: DurationToken = 'normal'
  const transitionTimingFunction: EasingToken = 'ease'

  return {
    '& > legend': {
      transitionProperty: 'color',
      transitionDuration,
      transitionTimingFunction
    },
    _focusWithin: { '& > legend': { color: color } },
    _active: {
      '@media (any-hover: hover)': {
        '& > legend:not(:active)': { color: color }
      }
    }
  }
}

export const style = cva({
  base: {
    display: 'flex',
    w: 'fit',
    pointerEvents: 'none',
    '& > legend': {
      pointerEvents: 'auto',
      fontSize: '2xl'
    },
    '& > label': {
      pointerEvents: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5',
      h: '12'
    }
  },
  variants: {
    labelRadio: {
      visible: {
        '& > legend': {}
      },
      hidden: {
        '& > legend': visibilityHidden
      }
    },
    color: {
      primary: colorVariants('primary'),
      secondary: colorVariants('secondary'),
      tertiary: colorVariants('tertiary')
    },
    orientation: {
      vertical: { flexDir: 'column' },
      horizontal: { flexDir: 'row', flexWrap: 'wrap', columnGap: '4' }
    }
  },
  defaultVariants: { labelRadio: 'visible', color: 'primary', orientation: 'vertical' }
})
