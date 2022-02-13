import { css } from '@emotion/css'
import React, { useState } from 'react'
export const Header = () => {
  const [Isactive, setIsactive] = useState(false)

  const isShow = css`
    @media (max-width: 767px) {
      display: block;
      width: 100%;
      height: 2px;
      background-color: red;
      position: absolute;
      left: 0;
      ${Isactive && `display: none;`}
    }
  `

  const burger__liner_first = css`
    top: 0;
  `
  const burger__liner_second = css`
    top: 50%;
    transform: translateY(-50%);
  `
  const burger__liner_third = css`
    bottom: 0;
  `
  const hideElementmenu = css`
    display: none; ;
  `
  const headerItem = css`
    ${Isactive &&
    `width: 100%;
      display: flex;
      flex-wrap: wrap;
      font-size: 52px;
      line-height: 48px;
      margin-bottom: 30px;
    `}
  `
  return (
    <header
      className={css`
        position: fixed;
        z-index: 20;

        ${Isactive &&
        `@media (max-width: 767px) {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: black;
          color: #fff;
          padding: 0 75px;
        }`}
      `}
    >
      {Isactive && (
        <div
          onClick={() => setIsactive(false)}
          className={css`
            padding-left: 60%;
            font-size: 40px;
          `}
        >
          &#10006;
        </div>
      )}
      <div
        className={css`
          justify-content: space-around;
          align-items: center;
          width: 960px;
          margin: 0 auto;
          border-bottom: 1px solid #828282;
          background-color: rgba(255, 255, 255, 0.6);

          ${!Isactive &&
          `@media (max-width: 767px) {
            display: none;
          }`}
          display: flex;
          flex-wrap: wrap;
          padding: 33px 0px 32px 0px;
          border-bottom: none;
          background-color: rgba(255, 255, 255, 0);
        `}
      >
        <li className={headerItem}>Home</li>
        <li className={headerItem}>About</li>
        <li className={headerItem}>Skills</li>
        <li className={headerItem}>Comments</li>
        <li className={headerItem}>Certificates</li>
        <li className={headerItem}>Contacts</li>
      </div>
      <div>
        <div
          onClick={() => setIsactive(true)}
          className={css`
            display: inline-block;
            margin-left: 60px;
            top: 4px;
            @media (max-width: 767px) {
              width: 20px;
              height: 20px;
              position: relative;
            }
          `}
        >
          <span
            className={css`
              ${isShow} ${burger__liner_first}
            `}
          ></span>
          <span
            className={css`
              ${isShow} ${burger__liner_second}
            `}
          ></span>
          <span
            className={css`
              ${isShow} ${burger__liner_third}
            `}
          ></span>
        </div>
      </div>
    </header>
  )
}
