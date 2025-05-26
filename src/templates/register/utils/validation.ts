import type { RegisterState } from '@/templates/register/types'

const passwordRules = [
  {
    check: (password: string) => password.length >= 8,
    message: 'パスワードは8文字以上である必要があります'
  },
  {
    check: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
    message: 'パスワードには大文字と小文字の両方を含めてください'
  },
  {
    check: (password: string) => /[a-zA-Z]/.test(password),
    message: 'パスワードには少なくとも1つのアルファベットを含めてください'
  },
  {
    check: (password: string) => /\d/.test(password),
    message: 'パスワードには少なくとも1つの数字を含めてください'
  },
  {
    check: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    message: 'パスワードには少なくとも1つの記号を含めてください'
  }
]

const validatePassword = (password: string): string => {
  for (const rule of passwordRules) {
    if (!rule.check(password)) {
      return rule.message
    }
  }
  return ''
}

export const validateField = (
  field: keyof RegisterState,
  value: string,
  registerState: RegisterState
): string => {
  switch (field) {
    case 'name':
      if (!value) return '名前を入力してください'
      if (value.length > 255) return '名前は255文字以下で入力してください'
      break
    case 'email':
      if (!value) return 'メールアドレスを入力してください'
      if (/[A-Z]/.test(value)) return 'メールアドレスには大文字を使用しないでください'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return '有効なメールアドレス形式で入力してください'
      }
      if (value.length > 255) return 'メールアドレスは255文字以内で入力してください'
      break
    case 'password':
      return validatePassword(value)
    case 'password_confirmation':
      if (value !== registerState.password) return 'パスワードが一致しません'
      break
    default:
      return ''
  }
  return ''
}
