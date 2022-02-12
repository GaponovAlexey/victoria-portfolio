import { css } from '@emotion/css'
import React from 'react'

export const Header = () => {
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
    </header>
  )
}
