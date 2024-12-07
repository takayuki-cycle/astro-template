import { useState } from 'react'
import { Child } from '@/templates/ssr/components/Child'

export const Ssr = () => {
  const [count, setCount] = useState<number>(0)

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onButtonClick={handleButtonClick} />
    </div>
  )
}
