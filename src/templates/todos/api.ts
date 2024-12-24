import axios from 'axios'
import type { TodosState } from '@/templates/todos/types'

// 共通の設定
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ユーザー登録を行う関数
export const todosUser = async (todosState: TodosState) => {
  await axiosInstance.post('/todos', todosState)
}
