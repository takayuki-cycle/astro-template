import type { Variants } from '@/components/radioGroupOrTabs/styles'

export interface Props {
  sx?: Variants
  label: string // 1画面に対してこのコンポーネントを複数使うときは、それぞれ異なるラベル名(name属性)を設定してください。
  group: string[]
  apiKey?: string
  skeletonItem?: number
}
