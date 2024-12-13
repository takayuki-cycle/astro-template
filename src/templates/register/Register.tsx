import { useEffect, useState } from 'react'
import type { RegisterState, LoginState } from '@/templates/register/types'
import { Input } from '@/components/input/Input'
import { validateField } from '@/templates/register/utils/validation'
import { fetchCsrfToken, registerUser, loginUser, logoutUser } from '@/templates/register/api'

const initialRegisterState: RegisterState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
}

const loginState: LoginState = {
  name: 'a',
  email: 'a@a.com',
  password: 'AlicePassword123!'
}

export const Register = () => {
  const [registerState, setRegisterState] = useState<RegisterState>(initialRegisterState)
  const [error, setError] = useState<RegisterState>(initialRegisterState)

  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        await fetchCsrfToken()
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error)
      }
    }

    getCsrfToken()
  }, [])

  const handleChange = (field: keyof RegisterState, value: string) => {
    setRegisterState((prevState) => ({
      ...prevState,
      [field]: value
    }))

    setError((prevError) => ({
      ...prevError,
      [field]: ''
    }))
  }

  const handleRegister = async () => {
    const newError: RegisterState = { ...initialRegisterState }

    for (const key of Object.keys(registerState)) {
      const field = key as keyof RegisterState
      const errorMessage = validateField(field, registerState[field], registerState)
      if (errorMessage) {
        newError[field] = errorMessage
      }
    }

    setError(newError)

    const hasError = Object.values(newError).some((error) => error !== '')
    if (!hasError) {
      try {
        await registerUser(registerState)
      } catch (error) {
        console.error('登録失敗:', error)
      }
    }
  }

  const handleLogin = async () => {
    try {
      await loginUser(loginState)
    } catch (error) {
      console.error('ログイン失敗:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error('ログアウト失敗:', error)
    }
  }

  return (
    <>
      <h1>ユーザー登録</h1>
      <form>
        <Input
          id='名前'
          value={registerState.name}
          onChange={(value) => handleChange('name', value)}
          placeholder='Name'
          error={error.name}
        />
        <Input
          id='メールアドレス'
          value={registerState.email}
          onChange={(value) => handleChange('email', value)}
          placeholder='Email'
          error={error.email}
        />
        <Input
          type='password'
          id='パスワード'
          value={registerState.password}
          onChange={(value) => handleChange('password', value)}
          placeholder='Password'
          error={error.password}
        />
        <Input
          type='password'
          id='パスワード確認'
          value={registerState.password_confirmation}
          onChange={(value) => handleChange('password_confirmation', value)}
          placeholder='Confirm Password'
          error={error.password_confirmation}
        />
        <button type='button' onClick={handleRegister}>
          登録
        </button>
      </form>
      <button type='button' onClick={handleLogin}>
        ログイン
      </button>
      <br />
      <button type='button' onClick={handleLogout}>
        ログアウト
      </button>
    </>
  )
}
