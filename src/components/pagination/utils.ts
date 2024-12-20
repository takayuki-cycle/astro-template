import type {
  Step,
  PaginationOptions,
  PaginationResult,
  PaginationResultUnder
} from '@/components/pagination/types'

const calculatePaginationBase = ({
  currentPage,
  lastPage,
  step
}: PaginationOptions): PaginationResult => {
  const firstStep = Math.max(1, currentPage - step)
  const lastStep = Math.min(lastPage, currentPage + step)
  const isShowFirstOmitNumber = currentPage - step - 2 === 1
  const isShowLastOmitNumber = currentPage + step + 2 === lastPage
  const isShowFirstLink = firstStep > 1
  const isShowLastLink = lastStep < lastPage
  const isShowFirstOmit = currentPage - (step + 1) !== 1
  const isShowLastOmit = currentPage + (step + 1) !== lastPage
  const range = Array.from({ length: lastStep - firstStep + 1 }, (_, i) => firstStep + i)

  return {
    isShowFirstOmitNumber,
    isShowLastOmitNumber,
    isShowFirstLink,
    isShowLastLink,
    isShowFirstOmit,
    isShowLastOmit,
    range
  }
}

export const calculatePagination = (
  currentPage: number,
  lastPage: number,
  step: Step
): PaginationResult => {
  return calculatePaginationBase({ currentPage, lastPage, step })
}

export const calculatePaginationUnder = (
  currentPage: number,
  lastPage: number
): PaginationResultUnder => {
  const step: Step = 1
  const baseResult = calculatePaginationBase({ currentPage, lastPage, step })

  return Object.fromEntries(
    Object.entries(baseResult).map(([key, value]) => [`${key}Under`, value])
  ) as PaginationResultUnder
}
