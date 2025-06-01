import type { RecipeVariantProps } from '@/../styled-system/css'
import type { style } from '@/components/radio/styles.ts'

export interface RadioProps {
  sx?: Variants
  id: number
  name: string
}

type Variants = RecipeVariantProps<typeof style>
