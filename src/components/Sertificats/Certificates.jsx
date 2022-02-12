import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const Certificates = () => {
  const { Certificates } = useSelector((state) => state.data)

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
  }

  return (
    <div
      className={css`
        position: relative;
        background: #fff;
      `}
    >
      <div
        className={css`
          position: absolute;
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
          Certificates
        </h3>
        <div>
          <Slider {...settings}>
            <div
              className={css`
                position: relative;
                margin: o auto;
                width: 470px;
                height: 400px;
              `}
            >
              <div
                className={css`
                  padding-top: 56.25%;
                `}
              >
                <iframe
                  className={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  `}
                  src='https://www.youtube.com/embed/YTNvrTUrlro'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
              </div>
            </div>
            {Certificates.map((coment) => (
              <div key={coment.id}>
                <img
                  className={css`
                    width: 470px;
                    height: 400px;
                  `}
                  src={coment.certificate}
                  alt='sertificate'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
