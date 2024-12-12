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

// GET以外のリクエストにCSRFトークンを付与
axiosInstance.interceptors.request.use((config) => {
  if (config.method !== 'get' && config.headers) {
    const csrfToken = localStorage.getItem('csrfToken')
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken
    }
  }
  return config
})

// CSRFトークンを取得する関数
export const fetchCsrfToken = async (): Promise<string> => {
  const response = await axiosInstance.get('/csrf-token')
  const csrfToken = response.data.csrf_token
  localStorage.setItem('csrfToken', csrfToken)
  return csrfToken
}

// ユーザー登録を行う関数
export const registerUser = async (registerState: RegisterState) => {
  await axiosInstance.post('/register', registerState)
}

// ユーザーをログアウトする関数
export const logoutUser = async () => {
  await axiosInstance.post('/logout')
}
