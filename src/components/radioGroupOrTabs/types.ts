import type { Variants } from '@/components/radioGroupOrTabs/styles'

export interface Props {
  sx: Variants // colorは必須で指定してください。例: sx={{ color: 'primary' }}
  label?: string // 原則は必須
  group: string[]
  apiKey?: string
}
