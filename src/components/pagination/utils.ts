import type { Step } from '@/components/pagination/types'

export const calculatePagination = (currentPage: number, lastPage: number, step: Step) => {
  const firstStep = Math.max(1, currentPage - step)
  const lastStep = Math.min(lastPage, currentPage + step)
  const isShowFirstOmitNumber = currentPage - step - 2 === 1
  const isShowLastOmitNumber = currentPage + step + 2 === lastPage
  const isShowFirstLink = firstStep > 1
  const isShowLastLink = lastStep < lastPage
  const isShowFirstOmit = currentPage - (step + 1) !== 1
  const isShowLastOmit = currentPage + (step + 1) !== lastPage
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  return {
    isShowFirstOmitNumber,
    isShowLastOmitNumber,
    isShowFirstLink,
    isShowLastLink,
    isShowFirstOmit,
    isShowLastOmit,
    range: range(firstStep, lastStep)
  }
}
