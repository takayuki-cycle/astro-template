import type { RadioProps } from '@/components/radio/types'
import { useStore } from '@nanostores/react'
import { selectedRadioId } from '@/stores/radio'

export const Radio = ({ id, name }: RadioProps) => {
  const selectedId = useStore(selectedRadioId)

  const handleRadioChange = () => {
    selectedRadioId.set(id)
  }

  return (
    <input
      type='radio'
      id={String(id)}
      name={name}
      checked={selectedId === id}
      onChange={handleRadioChange}
    />
  )
}
