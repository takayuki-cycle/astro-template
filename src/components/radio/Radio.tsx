import type { RadioProps } from '@/components/radio/types'
import { useStore } from '@nanostores/react'
import { buttonStore } from '@/stores/radio'

export const Radio = ({ id, name }: RadioProps) => {
  const selectedId = useStore(buttonStore)

  const handleRadioChange = () => {
    buttonStore.setKey('name', id)
  }

  return (
    <input
      type='radio'
      id={String(id)}
      name={name}
      checked={selectedId.name === id}
      onChange={handleRadioChange}
    />
  )
}
