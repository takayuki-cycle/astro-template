export interface PaginationProps {
  pathName: string
  currentPage: number
  lastPage: number
  step: Step
}

export type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 // 現在のページの前後表示数
