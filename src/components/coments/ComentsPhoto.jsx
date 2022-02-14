import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const ComentsPhoto = () => {
  const { comentImg, LanguageENG } = useSelector(
    (state) => state.data
  )
  const settings = {
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    dots: true,
  }

  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <div
        className={css`
          position: absolute;
          background: #f6f6f6;
          left: -500px;
          height: 480px;
          z-index: -1;
          padding-bottom: 40px;
        `}
      ></div>
      <div
        className={css`
          margin-bottom: 60px;
        `}
      >
        <h3
          className={css`
            padding-top: 30px;
            font-family: GilroyBold;
            font-size: 34px;
            line-height: 42px;
            text-align: center;
            margin-bottom: 30px;
          `}
        >
          {LanguageENG ? 'Comments' : 'Отзывы'}
        </h3>
        <div>
          <Slider {...settings}>
            {comentImg.map((coment) => (
              <div key={coment.id}>
                <img
                  className={css`
                    width: 200px;
                    height: 380px;
                  `}
                  src={coment.photo}
                  alt='ph1'
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  )
}
