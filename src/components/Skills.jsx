import { css } from '@emotion/css'
import React from 'react'

export const Skills = () => {
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
        className={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <div className='skils__one'></div>
        <div className='skils__two'></div>
        <div className='skils__three'></div>
      </div>
    </div>
  )
}
