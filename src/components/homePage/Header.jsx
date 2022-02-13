import { css } from '@emotion/css'
import React, { useState } from 'react'

export const Header = () => {
  const [Isactive, setIsactive] = useState(false)

  const isShow = css`
    display: block;
    width: 100%;
    height: 2px;
    background-color: red;
    position: absolute;
    left: 0;
    ${Isactive && `display: none;`}
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

  return (
    <header
      className={css`
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 960px;
        margin: 0 auto;
        padding: 33px 0px 32px 0px;
        border-bottom: 1px solid #828282;
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 20;
      `}
    >
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Comments</li>
      <li>Certificates</li>
      <li>Contacts</li>
      <div
        className={css`
          width: 40px;
          height: 20px;
          position: relative;
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
    </header>
  )
}
