export interface InputProps {
  type?: 'text' | 'password'
  id?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error: string
}
