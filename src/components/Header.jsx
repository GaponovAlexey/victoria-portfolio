import { css } from '@emotion/css'
import React from 'react'

export const Header = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        
      `}
    >
      <div>Home</div>
      <div>About</div>
      <div>Skills</div>
      <div>Portfolio</div>
      <div>Contacts</div>
    </div>
  )
}
