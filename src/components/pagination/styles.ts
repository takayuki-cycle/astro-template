import { cva } from '@/../styled-system/css'

export const style = cva({
  base: {
    w: 'fit',
    '& > ul': {
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '0',
      alignItems: 'center',
      rowGap: '1',
      md: {
        columnGap: '2'
      }
    },
    '& li': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: '0',
      color: 'text',
      minW: '9',
      h: '9',
      md: { minW: '10', h: '10' }
    },
    '& li:not(:has(a))': {
      minW: 'fit'
    },
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'text',
      w: 'full',
      h: 'full',
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease',
      '@media (hover: hover)': {
        _hover: {
          bgColor: 'hover.bg'
        }
      }
    },
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      minW: '9',
      h: '9',
      md: { minW: '10', h: '10' }
    }
  },
  variants: {
    color: {
      primary: { '& span': { color: 'primary', bgColor: 'primary', border: 'primary' } },
      secondary: { '& span': { color: 'secondary', bgColor: 'secondary', border: 'secondary' } },
      tertiary: { '& span': { color: 'tertiary', bgColor: 'tertiary', border: 'tertiary' } }
    },
    variant: {
      solid: { '& span': { color: 'text.light' } },
      outline: { '& a': { border: 'hover.bg' }, '& span': { bgColor: 'transparent' } }
    },
    shape: {
      circular: { '& a': { rounded: 'full' }, '& span': { rounded: 'full' } },
      rounded: { '& a': { rounded: 'md' }, '& span': { rounded: 'md' } }
    }
  },
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    shape: 'circular'
  }
})
