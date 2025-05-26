import { cva, type RecipeVariantProps } from '@/../styled-system/css'

export type Variants = RecipeVariantProps<typeof style>

export const style = cva({
  base: {
    bgColor: 'bg'
  },
  variants: {},
  defaultVariants: {}
})
