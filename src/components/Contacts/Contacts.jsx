import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'

import insta from '../../img/svg/insta.svg'

export const Contacts = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  return (
    <div
      className={css`
        @media (max-width: 768px) {
          max-width: 710px;
        }

        @media (max-width: 420px) {
          max-width: 350px;
        }
      `}
    >
      <div>
        <h2
          className={css`
            padding-top: 114px;
            font-family: GilroyBold;
            font-size: 34px;
            line-height: 42px;
            text-align: center;
          `}
        >
          {LanguageENG ? 'Contacts' : 'Контакты'}
        </h2>
        <div
          className={css`
            font-size: 18px;
            line-height: 22px;
            text-align: center;
          `}
        >
          <div
            className={css`
              width: 273px;
              margin: 0 auto;
              margin-top: 20px;
            `}
          >
            {LanguageENG
              ? 'Want to know more or just chat? You are welcome!'
              : 'Хотите узнать больше или просто спросить? Пожалуйста! '}
          </div>
          <div
            className={css`
              display: inline-block;
              background-color: black;
              border-radius: 50px;
              margin-top: 30px;
            `}
          >
            <a href='https://wa.me/79811654228?text=Я%20хочу%20у%20вас%20спросить'>
              <div
                className={css`
                  width: 180.5px;
                  height: 42px;
                  justify-content: center;
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                  color: white;
                `}
              >
                {LanguageENG ? 'Send message' : 'WhatsApp'}
              </div>
            </a>
          </div>
          <div
            className={css`
              padding-top: 91px;
            `}
          >
            <a href='https://www.instagram.com/pedicurecomenda/'>
              <img
                className={css`
                  height: 5%;
                  width: 5%;
                `}
                src={insta}
                alt='insta'
              />
            </a>
          </div>
          <div
            className={css`
              padding-top: 20px;
            `}
          >
            Like me on Instagram
          </div>
        </div>
      </div>
    </div>
  )
}
