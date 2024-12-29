import { cva, type RecipeVariantProps } from '@/../styled-system/css'

export type Variants = RecipeVariantProps<typeof style>

export const style = cva({
  base: {
    '& > legend': {
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
    }
  },
  variants: {
    display: {
      none: { display: 'none' },
      block: { display: 'block' }
    }
  },
  defaultVariants: {
    display: 'block'
  }
})
