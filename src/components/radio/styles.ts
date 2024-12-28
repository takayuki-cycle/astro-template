import { cva, type RecipeVariantProps } from '@/../styled-system/css'

export type Variants = RecipeVariantProps<typeof style>

export const style = cva({
  base: {},
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
