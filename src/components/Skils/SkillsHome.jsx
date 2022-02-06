import { css } from '@emotion/css'
import React from 'react'
import { PedMedModal } from './pedicure/PedMedModal'
import { SkilsOnePage } from './SkilsOnePage'

export const SkillsHome = () => {
  
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
          margin-bottom: 15px;
        `}
      >
        Skills
      </h2>
      <div>
        <SkilsOnePage />
      </div>
      <PedMedModal />
    </div>
  )
}
