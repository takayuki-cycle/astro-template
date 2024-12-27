import type { ButtonProps } from '@/components/button/types'
import { useStore } from '@nanostores/react'
import { buttonStore } from '@/stores/stores'

export const Button = ({ label = '送信', type = 'submit' }: ButtonProps) => {
  const resultJSON = useStore(buttonStore)

  const handleButtonClick = () => {
    alert(`resultJSON = ${JSON.stringify(resultJSON)}`)
  }

  return (
    <button type={type} onClick={handleButtonClick}>
      {label}
    </button>
  )
}
