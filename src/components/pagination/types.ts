export interface Props {
  pathName: string
  currentPage: number
  lastPage: number
  step?: Step
}

export type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 // 現在のページの前後表示数
