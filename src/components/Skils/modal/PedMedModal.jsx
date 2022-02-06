import { css } from '@emotion/css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isModalMedReducer } from '../../../Redux/reducer'

export const PedMedModal = () => {
  const { isModalMed } = useSelector((store) => store.data)
  const dispatch = useDispatch()
  return (
    <div>
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
        <div>MODAL MED</div>
        <div>
          <div
            onClick={() => dispatch(isModalMedReducer(false))}
            className={css`
              position: absolute;
              top: 0;
              right: 0;
              cursor: pointer;
            `}
          >
            &#9747;
          </div>
        </div>
      </div>
    </div>
  )
}
