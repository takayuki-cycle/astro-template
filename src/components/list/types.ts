import type { RecipeVariantProps } from '@/../styled-system/css'
import type { style } from '@/components/list/styles.ts'

export interface Props {
  sx?: Variants
  items: ListItem[]
}

type Variants = RecipeVariantProps<typeof style>

export interface ListItem {
  leftItem: string // 基本的にはアイコンを想定、そのためコンポーネントの型を含める必要があるかも？
  text: string // リストのタイトル
  rightItem: string // 基本的にはアイコンを想定、そのためコンポーネントの型を含める必要があるかも？
  link: string // クリック(タップ)で遷移するURL
}
