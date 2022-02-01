import { css } from '@emotion/css'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'

function App() {
  return (
    <div
      className={css`
        width: 960px;
        margin: 0 auto;
      `}
    >
      <Header />
      <Homepage />
    </div>
  )
}

export default App
