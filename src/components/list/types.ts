import type { Variants } from '@/components/list/styles'

export interface Props {
  sx?: Variants
  items: ListItem[]
}

export interface ListItem {
  leftItem: string // 基本的にはアイコンを想定、そのためコンポーネントの型を含める必要があるかも？
  text: string // リストのタイトル
  rightItem: string // 基本的にはアイコンを想定、そのためコンポーネントの型を含める必要があるかも？
  link: string // クリック(タップ)で遷移するURL
}
