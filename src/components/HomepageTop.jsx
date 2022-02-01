import { css } from '@emotion/css'
import React from 'react'

export const HomepageTop = () => {
  return (
    <div>
      <div
        className={css`
          dispaly: flex;
          flex-wrap: wrap;
          height: 123px;
          width: 118px;
          padding: 128px 0px 30px 0px;

          font-family: GilroyBold;
          font-size: 47.3392px;
          line-height: 59px;
        `}
      >
        <h1>Viktoria Olegovna</h1>
      </div>
      <div></div>
    </div>
  )
}
