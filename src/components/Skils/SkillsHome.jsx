import { css } from '@emotion/css'
import React from 'react'
import { SkilsOnePage } from './SkilsOnePage'

export const SkillsHome = () => {
  return (
    <div>
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
      <div
        
      >
        <SkilsOnePage />
      </div>
    </div>
  )
}
