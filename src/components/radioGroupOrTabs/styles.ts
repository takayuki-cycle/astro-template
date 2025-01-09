import { cva, type RecipeVariantProps } from '@/../styled-system/css'
import type { DurationToken, EasingToken } from '@/../styled-system/tokens/tokens'

export type Variants = RecipeVariantProps<typeof style>
type Color = BaseColor
type ColorHover = `${BaseColor}.hover`
type ColorActive = `${BaseColor}.active`
type BaseColor = 'primary' | 'secondary' | 'tertiary'

const colorVariants = (color: Color) => {
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

const typeColor = (color: Color, colorHover: ColorHover, colorActive: ColorActive) => {
  const transitionDuration: DurationToken = 'normal'
  const transitionTimingFunction: EasingToken = 'ease'

  return {
    type: 'tab' as const,
    color: color,
    css: {
      _focusWithin: {
        '& > .tab-container :has(input:checked)': {
          transitionProperty: 'background-color, color',
          transitionDuration,
          transitionTimingFunction,
          bgColor: colorHover
        },
        '& :has(input:not(:checked))': {
          transitionProperty: 'background-color, color',
          transitionDuration,
          transitionTimingFunction
        }
      },
      '&:not(:focus-within)': {
        '& :has(input:checked)': {
          transitionProperty: 'background-color',
          transitionDuration,
          transitionTimingFunction,
          bgColor: 'transparent'
        }
      },
      '& > .tab-container > label': {
        // eslint-disable-next-line no-restricted-syntax
        _hover: {
          '@media (any-hover: hover)': {
            transitionProperty: 'background-color',
            transitionDuration,
            transitionTimingFunction,
            bgColor: colorHover
          }
        },
        _active: {
          '&:active': {
            transitionProperty: 'background-color',
            transitionDuration,
            transitionTimingFunction,
            bgColor: colorActive
          }
        }
      },
      '& > .tab-container :has(input:checked)': {
        color: color,
        _after: {
          bgColor: color // 下線
        }
      }
    }
  }
}

export const style = cva({
  base: {
    '& label': {
      minW: '12',
      minH: '12'
    }
  },
  variants: {
    type: {
      radio: {
        display: 'flex',
        flexWrap: 'wrap',
        w: 'fit',
        pointerEvents: 'none',
        '& > legend': {
          pointerEvents: 'auto',
          fontSize: '2xl'
        },
        '& > label': {
          display: 'flex',
          pointerEvents: 'auto',
          alignItems: 'center',
          gap: '1.5'
        }
      },
      tab: {
        '& .tab-container': {
          display: 'flex',
          overflowX: 'scroll'
        },
        // 非表示だがスクリーンリーダーからは認識
        '& > legend, & input': {
          pos: 'absolute',
          w: '0.25',
          h: '0.25',
          // eslint-disable-next-line @pandacss/no-margin-properties
          m: '-0.25',
          p: '0',
          border: '0',
          overflow: 'hidden',
          // eslint-disable-next-line no-restricted-syntax
          clip: 'rect(0, 0, 0, 0)'
        },
        '& label': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          px: '2'
        },
        '& :has(input)': {
          pos: 'relative',
          _after: {
            transitionProperty: 'background-color',
            transitionDuration: 'normal',
            transitionTimingFunction: 'ease',
            content: '""',
            pos: 'absolute',
            bottom: '0',
            w: 'full',
            h: '0.5'
          }
        },
        '& > *:not(legend):not(.tab-container):nth-of-type(1)': {
          display: 'flex'
        },
        '& > *:not(legend):not(.tab-container):not(:nth-of-type(1))': {
          display: 'none'
        }
      }
    },
    color: {
      primary: colorVariants('primary'),
      secondary: colorVariants('secondary'),
      tertiary: colorVariants('tertiary')
    },
    orientation: {
      vertical: {},
      horizontal: {}
    },
    direction: {
      reverse: {
        '& > label': { flexDir: 'row-reverse', justifyContent: 'space-between' }
      }
    }
  },
  compoundVariants: [
    typeColor('primary', 'primary.hover', 'primary.active'),
    typeColor('secondary', 'secondary.hover', 'secondary.active'),
    typeColor('tertiary', 'tertiary.hover', 'tertiary.active'),
    {
      type: 'radio',
      orientation: 'vertical',
      css: { flexDir: 'column' }
    },
    {
      type: 'radio',
      orientation: 'horizontal',
      css: {
        flexDir: 'row',
        columnGap: '4'
      }
    },
    {
      type: 'tab',
      orientation: 'horizontal',
      css: {
        columnGap: '0'
      }
    },
    {
      type: 'tab',
      orientation: 'vertical',
      css: {
        sm: {
          display: 'flex',
          columnGap: '4',
          '& .tab-container': { flexDir: 'column', rowGap: '2', w: '1/5' },
          '& > *:not(legend):not(.tab-container)': { w: '4/5' }
        }
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    type: 'radio',
    orientation: 'vertical'
  }
})

// メモ(いずれ消します。)
// & > .tab-container > label:nth-of-type(${i}):has(input:checked)
// & *:not(legend):not(.tab-container):not(label):nth-of-type(${i})

// const checkedTabSelector = (groupLength: number) => {
//   const checkedTab: SystemStyleObject = {}
//   for (let i = 1; i <= groupLength; i++) {
//     checkedTab[
//       `& > .tab-container > label:nth-of-type(${i}):has(input:checked)`
//     ] = {
//       color: 'red.900',
//       display: 'flex'
//     }
//   }

//   return checkedTab
// }
