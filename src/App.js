import { css } from '@emotion/css'
import { About } from './components/About'
import { ComentsPhoto } from './components/coments/ComentsPhoto'
import { Contacts } from './components/Contacts/Contacts'
import { Header } from './components/homePage/Header'
import { HeaderImg } from './components/homePage/HeaderImg'
import { HomepageTop } from './components/homePage/HomepageTop'
import { Map } from './components/map/Map'
import { Certificates } from './components/Sertificats/Certificates'
import { SkillsHome } from './components/Skils/SkillsHome'

function App() {
  return (
    <div
      className={css`
        width: 960px;
        margin: 0 auto;
      `}
    >
      <Header />
      {/* // header // */}

      <HomepageTop />
      <HeaderImg />
      <About />
      {/* <SkillsHome /> */}
      <ComentsPhoto />
      <Certificates />
      <Map />
      {/* //foter // */}
      <Contacts />
    </div>
  )
}

export default App
