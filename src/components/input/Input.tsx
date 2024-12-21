import type { InputProps } from '@/components/input/types'
import { css } from '@/../styled-system/css'

export const Input = ({
  type = 'text',
  id,
  value,
  onChange,
  autoComplete = 'off',
  placeholder = '',
  ariaRequired = undefined,
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
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-required={ariaRequired}
      />
      <p className={css({ color: 'danger' })}>{error}</p>
    </div>
  )
}
