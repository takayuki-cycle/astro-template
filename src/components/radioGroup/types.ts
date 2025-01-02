import type { Variants } from '@/components/radioGroup/styles'

export interface Props {
  sx?: Variants
  label?: string // 原則は必須
  group: string[]
  apiKey?: string
}
