import { css } from '@emotion/css'
import React from 'react'

import Slider from 'react-slick'

import Skilimg1 from '../../img/Skils/p1.jpg'
import Skilimg2 from '../../img/Skils/p2.jpg'
import Skilimg3 from '../../img/Skils/p3.jpg'
import Skilimg4 from '../../img/Skils/p4.jpg'

export const SkilsOnePage = () => {
  return (
    <div>
      <div
        className={css`
          display: grid;
          grid-column-gap: 40px;
          grid-row-gap: 30px;
          grid-template-columns: repeat(2, 1fr);
          justify-items: center;
        `}
      >
        <div
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img
            className={css``}
            className='skilimg1'
            src={Skilimg4}
            alt='Skilimg4'
          />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-family: GilroyBold;
              font-size: 21px;
            `}
          >
             Podiatry
          </h3>
        </div>
        <div
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img
            className='skilimg1'
            src={Skilimg1}
            alt='Skilimg1'
          />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-family: GilroyBold;
              font-size: 21px;
            `}
          >
            Cosmetic pedicure
          </h3>
        </div>
        <div
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img className='skilimg1' src={Skilimg2} alt='Skilimg2' />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-family: GilroyBold;
              font-size: 21px;
            `}
          >
           Massage
          </h3>
        </div>
        <div
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img className='skilimg1' src={Skilimg3} alt='Skilimg3' />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-family: GilroyBold;
              font-size: 21px;
            `}
          >
            Teeth whitening
          </h3>
        </div>
      </div>
    </div>
  )
}
