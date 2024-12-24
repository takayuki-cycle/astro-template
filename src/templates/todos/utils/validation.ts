import type { TodosState } from '@/templates/todos/types'

export const validateField = (field: keyof TodosState, value: string): string => {
  switch (field) {
    case 'title':
      if (!value) return 'タイトルを入力してください'
      if (value.length > 255) return 'タイトルは255文字以下で入力してください'
      break
    default:
      return ''
  }
  return ''
}
