import type { RadioProps } from '@/components/radio/types'
import { useStore } from '@nanostores/react'
import { buttonStore } from '@/stores/stores'

export const Radio = ({ id, name }: RadioProps) => {
  const selectedId = useStore(buttonStore)

  if (selectedId[name] === undefined) {
    buttonStore.setKey(name, 0)
  }

  const handleRadioChange = () => {
    buttonStore.setKey(name, id)
  }

  return (
    <input
      type='radio'
      id={String(id)}
      name={name}
      checked={selectedId[name] === id}
      onChange={handleRadioChange}
    />
  )
}
