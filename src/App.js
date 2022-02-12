import { css } from '@emotion/css'
import { About } from './components/About'
import { Header } from './components/homePage/Header'
import { HeaderImg } from './components/homePage/HeaderImg'
import { HomepageTop } from './components/homePage/HomepageTop'


import { SkillsHome } from './components/Skils/SkillsHome'
import { ComentsHome } from './components/coments/ComentsHome'
import { Contacts } from './components/Contacts/Contacts'
import { ComentsPhoto } from './components/coments/ComentsPhoto'

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
      <ComentsPhoto />
      <Contacts />
    </div>
  )
}

export default App
