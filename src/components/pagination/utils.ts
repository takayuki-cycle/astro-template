import type { Step } from '@/components/pagination/types'

export const calculatePagination = (currentPage: number, lastPage: number, step: Step) => {
  const firstStep = Math.max(1, currentPage - step)
  const lastStep = Math.min(lastPage, currentPage + step)
  const isShowFirstLink = firstStep > 1
  const isShowLastLink = lastStep < lastPage
  const isShowFirstOmit = currentPage - (step + 1) !== 1
  const isShowLastOmit = currentPage + (step + 1) !== lastPage
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  return {
    isShowFirstLink,
    isShowLastLink,
    isShowFirstOmit,
    isShowLastOmit,
    range: range(firstStep, lastStep),
  }
}
