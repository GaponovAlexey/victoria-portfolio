import { css } from '@emotion/css'
import React from 'react'
import Skilimg1 from '../../img/p1.jpg'
import Skilimg2 from '../../img/p2.jpg'
import Skilimg3 from '../../img/p3.jpg'

export const SkilsOnePage = () => {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
      `}
    >
      <div>
        <img className='skilimg1' src={Skilimg1} alt='Skilimg1' />
      </div>
      <div>
        <img className='skilimg1' src={Skilimg2} alt='Skilimg2' />
      </div>
      <div>
        <img className='skilimg1' src={Skilimg3} alt='Skilimg3' />
      </div>
    </div>
  )
}
