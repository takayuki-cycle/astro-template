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
    alignItems: 'baseline',
    gap: '1',
    // flexWrap: 'wrap',
    // gridAutoFlow: 'column',
    // gridTemplateColumns: 'repeat(auto-fill,1fr)',
    // gridTemplateColumns: 'repeat(2, 1fr)',
    // gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    // gap: '4',
    w: 'fit',
    pointerEvents: 'none',
    '& > *': { pointerEvents: 'auto' },
    '& > legend': {
      // gridColumn: '1 / -1'
    },
    '& > label': {
      display: 'flex',
      // alignItems: 'center',
      gap: '2'
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
      horizontal: {}
    }
  },
  defaultVariants: { labelRadio: 'visible', color: 'primary', orientation: 'vertical' }
})
