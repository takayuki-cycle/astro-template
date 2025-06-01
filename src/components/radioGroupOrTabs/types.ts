import type { RecipeVariantProps } from '@/../styled-system/css'
import type { style } from '@/components/radioGroupOrTabs/styles.ts'

export interface Props {
  sx?: Variants
  label: string // 1画面に対してこのコンポーネントを複数使うときは、それぞれ異なるラベル名(name属性)を設定してください。
  group: string[]
  apiKey?: string
  skeletonItem?: number
}

export type Variants = RecipeVariantProps<typeof style>
