import type { RadioProps } from '@/components/radio/types'
import { useStore } from '@nanostores/react'
import { buttonStore } from '@/stores/stores'
import { style } from '@/components/radio/styles.ts'

export const Radio = ({ sx, id, name }: RadioProps) => {
  const selectedId = useStore(buttonStore)

  if (selectedId[name] === undefined) {
    buttonStore.setKey(name, 0)
  }

  const handleRadioChange = () => {
    buttonStore.setKey(name, id)
  }

  return (
    <>
      {sx?.preview === 'skeleton' ? (
        <div className={style(sx)} data-inner-circle={id === 0 ? 'true' : undefined} />
      ) : (
        <input
          className={style(sx)}
          // eslint-disable-next-line no-restricted-syntax
          type='radio'
          id={`${name}-${id}`}
          name={name}
          checked={selectedId[name] === id}
          onChange={handleRadioChange}
        />
      )}
    </>
  )
}
