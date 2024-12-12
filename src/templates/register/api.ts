import axios from 'axios'
import type { RegisterState } from '@/templates/register/types'

// 共通の設定
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

// CSRFトークンを取得する関数
export const fetchCsrfToken = async (): Promise<string> => {
  const response = await axiosInstance.get('/csrf-token')
  return response.data.csrf_token
}

// ユーザー登録を行う関数
export const registerUser = async (registerState: RegisterState, csrfToken: string) => {
  await axiosInstance.post('/register', registerState, {
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  })
}

// ユーザーをログアウトする関数
export const logoutUser = async (csrfToken: string) => {
  await axiosInstance.post('/logout', null, {
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  })
}
