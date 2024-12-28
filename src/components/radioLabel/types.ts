import type { Variants } from '@/components/radio/styles'

export interface Props {
  sx?: Variants
  id: number
  name: string
  label: string
  invert?: boolean
}
