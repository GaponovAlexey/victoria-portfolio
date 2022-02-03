import { css } from '@emotion/css'
import React from 'react'
import Slider from 'react-slick'
import { SkilsOnePage } from './SkilsOnePage'
import { SkilsTwoPage } from './SkilsTwoPage'

export const SkillsHome = () => {
  const [isSkils, setisSkils] = React.useState(true)

  return (
    <div
      className={css`
        padding-bottom: 50px;
      `}
    >
      <h2
        className={css`
          font-family: GilroyBold;
          font-size: 34px;
          line-height: 42px;
          text-align: center;
        `}
      >
        Skills
      </h2>
      <div>
        <SkilsOnePage />
        {/* <SkilsTwoPage /> */}
      </div>
    </div>
  )
}
