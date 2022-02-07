import { css } from '@emotion/css'
import React from 'react'
import Slider from 'react-slick'



export const ComentsHome = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    // adaptiveHeight: true, 
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // fade: 3,
    // infinite: true,
    focusOnSelect: true,
    initialSlide: true,
  }

  return (
    <div className={css`margin-bottom: 40px;`}>
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
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com2}
              alt='com2'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com3}
              alt='com3'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com4}
              alt='com4'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com5}
              alt='com5'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com6}
              alt='com6'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com7}
              alt='com7'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com8}
              alt='com8'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com9}
              alt='com9'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com10}
              alt='com10'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com11}
              alt='com11'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com12}
              alt='com12'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com13}
              alt='com13'
            />
          </div>
          <div>
            <img
              className={css`
                width: 100%;
                height: 100%;
              `}
              src={com14}
              alt='com14'
            />
          </div>
          
        </Slider>
      </div>
    </div>
  )
}
