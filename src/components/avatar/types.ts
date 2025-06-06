import type { RecipeVariantProps } from '@/../styled-system/css'
import type { styleImage, styleLetter } from '@/components/avatar/styles.ts'
import type { ListItem } from '@/components/list/types.ts'
import type { FontSizeToken, SizeToken, SpacingToken } from '@/../styled-system/tokens/tokens'

export interface Props {
  sx?: Variants
  src?: ImageMetadata
  size?: Size
  alt?: string // Letter avatarsではイニシャルを表示するために使用
  badge?: string // TODO: Avatarの右下に表示されるステータスをいずれ実装すること
  items?: ListItem[] // Avatarをクリック(タップ)したときに表示されるリスト
}

type Variants = RecipeVariantProps<typeof styleLetter> & RecipeVariantProps<typeof styleImage>

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type SizeStyleMap = Record<
  Size,
  {
    sizeAndBottom: SizeToken & SpacingToken
    fontSize: FontSizeToken
    py: SpacingToken
  }
>
