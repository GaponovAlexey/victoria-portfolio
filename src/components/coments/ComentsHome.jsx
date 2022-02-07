import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const ComentsHome = () => {
  const { comentData } = useSelector((state) => state.data)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // fade: 3,
    focusOnSelect: true,
    initialSlide: true,
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
          width: 2000px;
          left: -500px;
          height: 380px;
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
          Comments
        </h3>
        <div>
          <Slider {...settings}>
            {comentData.map((coment) => (
              <div key={coment.user}>
                <div
                  className={css`
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    font-size: 18px;
                    line-height: 22px;
                  `}
                >
                  <div className={css``}>{coment.coment}</div>
                  <div
                    className={css`
                      margin-left: 30px;
                      font-family: GilroyBold;
                    `}
                  >
                    {coment.user}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
