import { css } from '@emotion/css'
import React from 'react'

import insta from '../../img/svg/insta.svg'

export const Contacts = () => {
  return (
    <div>
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
          Contacts
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
            Want to know more or just chat? You are welcome!
          </div>
          <div
            className={css`
              display: inline-block;
              background-color: black;
              border-radius: 50px;
              margin-top: 30px;
            `}
          >
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
              <a href='https://wa.me/79811654228?text=Я%20хочу%20у%20вас%20спросить'>
                Send message
              </a>
            </div>
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
