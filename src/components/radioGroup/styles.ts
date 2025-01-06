import { cva, type RecipeVariantProps } from '@/../styled-system/css'
import type { DurationToken, EasingToken } from '@/../styled-system/tokens/tokens'
import type { SystemStyleObject } from '@/../styled-system/types'

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
        '& :has(input:checked)': {
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
      '& > label': {
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
      '& :has(input:checked)': {
        color: color,
        _after: {
          bgColor: color // 下線
        }
      }
    }
  }
}

const checkedTabSelector = (groupLength: number) => {
  const checkedTab: SystemStyleObject = {}
  for (let i = 1; i <= groupLength; i++) {
    checkedTab[
      `& > label:nth-of-type(${i}):has(input:checked) ~ *:not(legend):not(label):nth-of-type(${i})`
    ] = {
      display: 'flex'
    }
    checkedTab[
      `& > label:nth-of-type(${i}):has(input:checked) ~ *:not(legend):not(label):not(:nth-of-type(${i}))`
    ] = {
      display: 'none'
    }
  }

  return checkedTab
}

export const style = cva({
  base: {
    display: 'flex',
    '& > label': {
      minW: '12',
      minH: '12'
    }
  },
  variants: {
    type: {
      radio: {
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
        columnGap: '0',
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
        '& > label': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
        '& > *:not(legend):not(label)': {
          w: 'full'
        }
      }
    },
    color: {
      primary: colorVariants('primary'),
      secondary: colorVariants('secondary'),
      tertiary: colorVariants('tertiary')
    },
    orientation: {
      vertical: { flexDir: 'column' },
      horizontal: { flexDir: 'row', flexWrap: 'wrap' }
    },
    direction: {
      reverse: {
        '& > label': { flexDir: 'row-reverse', justifyContent: 'space-between' }
      }
    },
    contentsNumber: {
      2: checkedTabSelector(2),
      3: checkedTabSelector(3),
      4: checkedTabSelector(4),
      5: checkedTabSelector(5),
      6: checkedTabSelector(6),
      7: checkedTabSelector(7),
      8: checkedTabSelector(8),
      9: checkedTabSelector(9),
      10: checkedTabSelector(10),
      11: checkedTabSelector(11),
      12: checkedTabSelector(12),
      13: checkedTabSelector(13),
      14: checkedTabSelector(14),
      15: checkedTabSelector(15),
      16: checkedTabSelector(16),
      17: checkedTabSelector(17),
      18: checkedTabSelector(18),
      19: checkedTabSelector(19),
      20: checkedTabSelector(20),
      21: checkedTabSelector(21),
      22: checkedTabSelector(22),
      23: checkedTabSelector(23),
      24: checkedTabSelector(24),
      25: checkedTabSelector(25),
      26: checkedTabSelector(26),
      27: checkedTabSelector(27),
      28: checkedTabSelector(28),
      29: checkedTabSelector(29),
      30: checkedTabSelector(30)
    }
  },
  compoundVariants: [
    typeColor('primary', 'primary.hover', 'primary.active'),
    typeColor('secondary', 'secondary.hover', 'secondary.active'),
    typeColor('tertiary', 'tertiary.hover', 'tertiary.active'),
    {
      type: 'radio',
      orientation: 'horizontal',
      css: {
        columnGap: '4'
      }
    },
    {
      type: 'tab',
      orientation: 'horizontal',
      css: {
        columnGap: '0'
      }
    }
  ],
  // contentsNumberは"type: 'tab'"のときに"group.length"の値によって決まるため、指定していません。
  // "type: 'tab'"かつ"orientation: 'vertical'"のときのスタイルは未対応です。
  defaultVariants: {
    color: 'primary',
    type: 'radio',
    orientation: 'vertical'
  }
})
