import { css } from '@emotion/css'
import React from 'react'
import Slider from 'react-slick'
import Skilimg1 from '../../img/p1.jpg'
import Skilimg2 from '../../img/p2.jpg'
import Skilimg3 from '../../img/p3.jpg'

export const SkilsTwoPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className='skilimg1' src={Skilimg1} alt='Skilimg1' />
        </div>
        <div>
          <img className='skilimg1' src={Skilimg2} alt='Skilimg2' />
        </div>
        <div>
          <img className='skilimg1' src={Skilimg3} alt='Skilimg3' />
        </div>
      </Slider>
    </div>
  )
}
