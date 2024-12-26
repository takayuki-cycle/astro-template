import { axiosInstance } from '@/utils/api'
import type { TodosState } from '@/templates/todos/types'

export const fetchTodos = async () => {
  const response = await axiosInstance.get('/todos')
  return response.data
}

export const createTodo = async (todosState: TodosState) => {
  const response = await axiosInstance.post('/todos', todosState)
  return response.data
}

export const fetchTodoById = async (id: number) => {
  const response = await axiosInstance.get(`/todos/${id}`)
  return response.data
}

export const updateTodo = async (id: number, updatedTodo: TodosState) => {
  const response = await axiosInstance.put(`/todos/${id}`, updatedTodo)
  return response.data
}

export const deleteTodo = async (id: number) => {
  const response = await axiosInstance.delete(`/todos/${id}`)
  return response.data
}
