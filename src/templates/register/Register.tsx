import { useState } from 'react'
import type { RegisterState } from '@/templates/register/types'
import { Input } from '@/components/input/Input'
import { validateField } from '@/templates/register/utils/validation'

const initialRegisterState: RegisterState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
}

export const Register = () => {
  const [registerState, setRegisterState] = useState<RegisterState>(initialRegisterState)
  const [error, setError] = useState<RegisterState>(initialRegisterState)

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

  const handleConfirm = () => {
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
      console.log('登録成功:', registerState)
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
        <button type='button' onClick={handleConfirm}>
          確定
        </button>
      </form>
    </>
  )
}
