import type { InputProps } from '@/components/input/types'
import { css } from '@/../styled-system/css'

export const Input = ({
  type = 'text',
  id,
  value,
  onChange,
  placeholder = '',
  error
}: InputProps) => {
  return (
    <div>
      {id && <label htmlFor={id}>{id}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <p className={css({ color: 'danger' })}>{error}</p>
    </div>
  )
}
