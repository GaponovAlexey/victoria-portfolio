import { css } from '@emotion/css'
import { About } from './components/About'
import { Header } from './components/homePage/Header'
import { HeaderImg } from './components/homePage/HeaderImg'
import { HomepageTop } from './components/homePage/HomepageTop'
import { Skills } from './components/Skills'

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
      <HeaderImg />
      <About />
      <Skills />
    </div>
  )
}

export default App
