import { css } from '@emotion/css'
import React from 'react'

export const HomepageTop = () => {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 128px 0px 30px 0px;
        align-items: flex-end;
        text-align: end;
      `}
    >
      <div
        className={css`
          dispaly: flex;
          flex-wrap: wrap;
          height: 123px;
          width: 118px;
          // padding: 128px 0px 30px 0px;

          font-family: GilroyBold;
          font-size: 47.3392px;
          line-height: 59px;
        `}
      >
        <h1>Viktoria Olegovna</h1>
      </div>
      <div> Pedicure Professional <br/> 33 years old,<br/> Komendantsky Prospekt (Saint Petersburg)</div>
      <div>RU | ENG </div>
    </div>
  )
}
