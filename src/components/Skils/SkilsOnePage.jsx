import { css } from '@emotion/css'
import React from 'react'

import Slider from 'react-slick'


import Skilimg1 from '../../img/p1.jpg'
import Skilimg2 from '../../img/p2.jpg'
import Skilimg3 from '../../img/p3.jpg'

export const SkilsOnePage = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
  }

  return (
    <Slider
      {...settings}
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 25px;
      `}
    >
      <div
        className={css`
          &:hover {
            opacity: 0.6;
            cursor: pointer;
          }
        `}
      >
        <img className='skilimg1' src={Skilimg1} alt='Skilimg1' />
      </div>
      <div
        className={css`
          &:hover {
            opacity: 0.6;
            cursor: pointer;
          }
        `}
      >
        <img className='skilimg1' src={Skilimg2} alt='Skilimg2' />
      </div>
      <div
        className={css`
          &:hover {
            opacity: 0.6;
            cursor: pointer;
          }
        `}
      >
        <img className='skilimg1' src={Skilimg3} alt='Skilimg3' />
      </div>
    </Slider>
  )
}
