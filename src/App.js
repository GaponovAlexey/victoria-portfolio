import { css } from '@emotion/css'
import { Header } from './components/Header'
import { HomepageTop } from './components/HomepageTop'

function App() {
  return (
    <div
      className={css`
        width: 960px;
        margin: 0 auto;
      `}
    >
      <Header />
      <HomepageTop />
    </div>
  )
}

export default App
