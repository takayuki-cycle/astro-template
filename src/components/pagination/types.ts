import type { Variants } from '@/components/pagination/styles'

export interface Props {
  sx?: Variants
  pathName: string
  currentPage: number
  lastPage: number
  step?: Step
}

export type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 // 現在のページの前後表示数

export type PaginationOptions = {
  currentPage: number
  lastPage: number
  step: Step
}

export type PaginationResult = {
  isShowFirstOmitNumber: boolean
  isShowLastOmitNumber: boolean
  isShowFirstLink: boolean
  isShowLastLink: boolean
  isShowFirstOmit: boolean
  isShowLastOmit: boolean
  range: number[]
}

export type PaginationResultUnder = {
  [K in keyof PaginationResult as `${K}Under`]: PaginationResult[K]
}
