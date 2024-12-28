import type { RadioProps } from '@/components/radio/types'
import { useStore } from '@nanostores/react'
import { buttonStore } from '@/stores/stores'
import { style } from '@/components/radio/styles'

export const Radio = ({ sx, id, name }: RadioProps) => {
  const selectedId = useStore(buttonStore)

  if (selectedId[name] === undefined) {
    buttonStore.setKey(name, 0)
  }

  const handleRadioChange = () => {
    buttonStore.setKey(name, id)
  }

  return (
    <input
      className={style(sx)}
      type='radio'
      id={`${name}-${id}`}
      name={name}
      checked={selectedId[name] === id}
      onChange={handleRadioChange}
    />
  )
}
