import type { ButtonProps } from '@/components/button/types'
import { useStore } from '@nanostores/react'
import { buttonStore } from '@/stores/radio'

export const Button = ({ type = 'submit' }: ButtonProps) => {
  const selectedId = useStore(buttonStore)

  const handleButtonClick = () => {
    alert(`Selected ID in Component A: ${selectedId.name}`)
  }

  return (
    <button type={type} onClick={handleButtonClick}>
      ボタンボタンボタン
    </button>
  )
}
