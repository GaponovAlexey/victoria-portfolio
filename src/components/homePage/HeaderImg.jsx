import { css } from '@emotion/css'
import React from 'react'

import logoImg from '../../img/2.jpg'

export const HeaderImg = () => {
  return (
    <div
      className={css`
        padding-bottom: 30px;
      `}
    >
      <div className={css``}>
        <img
          className={css`
            object-fit: cover;
            width: 960px;
            height: 300px;
            @media (min-width: 768px) {
              min-width: 660px;
            }
            @media (min-width: 567px) {
            min-width: 660px;
            }
            @media (min-width: 420px) {
              min-width: 660px;
            }
          `}
          src={logoImg}
          alt='logo'
        />
      </div>
    </div>
  )
}
