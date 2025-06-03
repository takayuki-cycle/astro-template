import { cva } from '@/../styled-system/css'

export const style = cva({
  base: {
    w: 'full',
    sm: {
      w: 'fit',
      columnGap: '1'
    },
    '& .upper': { display: 'none', sm: { display: 'flex' } },
    '& .under': { display: 'flex', sm: { display: 'none' } },
    '& > ul': {
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '0',
      alignItems: 'center',
      justifyContent: 'space-around',
      rowGap: '1',
      sm: {
        justifyContent: 'normal',
        columnGap: '1'
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
      sm: { minW: '10', h: '10' }
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
      _hover: { '@media (any-hover: hover)': { bgColor: 'hover.bg' } },
      _focusVisible: { bgColor: 'hover.bg' },
      _active: { '&:active': { bgColor: 'hover.bg.active' } }
    },
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      minW: '9',
      h: '9',
      sm: { minW: '10', h: '10' }
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
