import { Input } from '@/components'
import type { TodosState } from '@/templates/todos/types'
import { useState } from 'react'
import { validateField } from '@/templates/todos/utils/validation'
import { createTodo } from '@/templates/todos/api'

const initialTodosState: TodosState = {
  title: ''
}

export const Store = () => {
  const [todosState, setTodosState] = useState<TodosState>(initialTodosState)
  const [error, setError] = useState<TodosState>(initialTodosState)

  const handleChange = (field: keyof TodosState, value: string) => {
    setTodosState((prevState) => ({
      ...prevState,
      [field]: value
    }))

    setError((prevError) => ({
      ...prevError,
      [field]: ''
    }))
  }

  const handleTodos = async () => {
    const newError: TodosState = { ...initialTodosState }

    for (const key of Object.keys(todosState)) {
      const field = key as keyof TodosState
      const errorMessage = validateField(field, todosState[field])
      if (errorMessage) {
        newError[field] = errorMessage
      }
    }

    setError(newError)

    const hasError = Object.values(newError).some((error) => error !== '')
    if (!hasError) {
      try {
        await createTodo(todosState)
      } catch (error) {
        console.error('登録失敗:', error)
      }
    }
  }

  return (
    <form>
      <Input
        id='タイトル'
        value={todosState.title}
        onChange={(value) => handleChange('title', value)}
        placeholder='Title'
        ariaRequired
        error={error.title}
      />
      <button type='button' onClick={handleTodos}>
        登録
      </button>
    </form>
  )
}
