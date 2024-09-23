import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'

const testCSS = css({ maxW: '2xl', fontWeight: 'bold' })

export const App = () => {
  return (
    <>
      <div className={testCSS}>AAA</div>
      <div
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
        })}
      >
        AAA
      </div>
      <Container>BBB</Container>
    </>
  )
}
