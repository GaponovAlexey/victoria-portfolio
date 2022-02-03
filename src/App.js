import { css } from '@emotion/css'
import { About } from './components/About'
import { Header } from './components/homePage/Header'
import { HeaderImg } from './components/homePage/HeaderImg'
import { HomepageTop } from './components/homePage/HomepageTop'
import { SkillsHome } from './components/Skils/SkillsHome'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


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
      <SkillsHome />
    </div>
  )
}

export default App
