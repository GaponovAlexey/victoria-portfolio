import { css } from '@emotion/css'
import React, { useState } from 'react'

export const PedMedModal = ({setisModalMed}) => {
  const [isModalMed, setisModalMed] = useState(true)

  return (
    <div
      className={css`
        position: fixed;
        top: 20px;
        left: auto;
        background-color: red;
        height: 500px;
        width: 960px;
        ${!isModalMed ? `visibility: hidden;` : ``}
      `}
    >
      MODAL
    </div>
  )
}
