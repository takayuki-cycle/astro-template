import type { Variants } from '@/components/avatar/styles'
import type { ListItem } from '@/components/list/types.ts'

export interface Props {
  sx?: Variants
  src?: ImageMetadata
  size?: Size
  alt?: string // Letter avatarsではイニシャルを表示するために使用
  badge?: string // TODO: Avatarの右下に表示されるステータスをいずれ実装すること
  items?: ListItem[] // Avatarをクリック(タップ)したときに表示されるリスト
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
