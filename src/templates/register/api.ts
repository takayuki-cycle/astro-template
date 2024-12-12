import axios from 'axios'
import type { RegisterState } from '@/templates/register/types'

export const fetchCsrfToken = async (): Promise<string> => {
  const response = await axios.get('http://localhost:8000/csrf-token', {
    withCredentials: true
  })
  return response.data.csrf_token
}

export const registerUser = async (registerState: RegisterState, csrfToken: string) => {
  await axios.post('http://localhost:8000/register', registerState, {
    headers: {
      'X-CSRF-TOKEN': csrfToken
    },
    withCredentials: true
  })
}

export const logoutUser = async (csrfToken: string) => {
  await axios.post('http://localhost:8000/logout', null, {
    headers: {
      'X-CSRF-TOKEN': csrfToken
    },
    withCredentials: true
  })
}
