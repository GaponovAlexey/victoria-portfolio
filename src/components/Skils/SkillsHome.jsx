import { css } from '@emotion/css'
import React from 'react'
import { ModalMAS } from './modal/ModalMAS'
import { PedMedModal } from './modal/PedMedModal'
import { PedModalCOS } from './modal/PedModalCOS'
import { PedModalSmile } from './modal/PedModalSmile'
import { SkilsOnePage } from './SkilsOnePage'

export const SkillsHome = () => {
  return (
    <div
      className={css`
        padding-bottom: 50px;
        border-radius: 51px;
      `}
    >
      <h2
        className={css`
          font-family: GilroyBold;
          font-size: 34px;
          line-height: 42px;
          text-align: center;
          margin-bottom: 15px;
          padding-top: 30px;
        `}
      >
        Skills
      </h2>
      <div>
        <SkilsOnePage />
      </div>
      <div>
        <PedMedModal />
        <PedModalCOS />
        <ModalMAS />
        <PedModalSmile />
      </div>
    </div>
  )
}
