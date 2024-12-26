import type { ButtonProps } from '@/components/button/types'
import { useStore } from '@nanostores/react'
import { selectedRadioId } from '@/stores/radio'

export const Button = ({ type = 'submit' }: ButtonProps) => {
  const selectedId = useStore(selectedRadioId)

  const handleButtonClick = () => {
    alert(`Selected ID in Component A: ${selectedId}`)
  }

  return (
    <button type={type} onClick={handleButtonClick}>
      ボタンボタンボタン
    </button>
  )
}
