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
      <img
        className={css`
          object-fit: cover;
          width: 960px;
          height: 300px;
          padding-top: 20px;
          // @media (min-width: 768px) {
          //   max-width: 650px;
          // }
          // @media (min-width: 567px) {
          //   max-width: 650px;
          // }
          // @media (min-width: 420px) {
          //   max-width: 650px;
          // }
        `}
        src={logoImg}
        alt='logo'
      />
    </div>
  )
}
