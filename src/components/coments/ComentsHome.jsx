import { css } from '@emotion/css'
import React from 'react'
import Slider from 'react-slick'

import com1 from '../../img/koments/1.jpg'

export const ComentsHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide)
    },
  }

  return (
    <div>
      <h3
        className={css`
          font-family: GilroyBold;
          font-size: 34px;
          line-height: 42px;
          text-align: center;
        `}
      >
        Comments
      </h3>
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              <img
                className={css`
                  width: 100%;
                  height: 100%;
                `}
                src={com1}
                alt='com1'
              />
            </h3>
          </div>
          <div>
            <h3>2</h3>
            <img src={com1} alt='com1' />
          </div>
          <div>
            <h3>3</h3>
            <img src={com1} alt='com1' />
          </div>
          <div>
            <h3>4</h3>
            <img src={com1} alt='com1' />
          </div>
          <div>
            <h3>5</h3>
            <img src={com1} alt='com1' />
          </div>
          <div>
            <h3>6</h3>
            <img src={com1} alt='com1' />
          </div>
        </Slider>
      </div>
    </div>
  )
}
