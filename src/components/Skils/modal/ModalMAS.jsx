import { css } from '@emotion/css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isModalMASReducer } from '../../../Redux/reducer'

export const ModalMAS = () => {
  const { isModalMAS } = useSelector((store) => store.data)
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
          ${!isModalMAS ? `visibility: hidden;` : ``}
        `}
      >
        <div>MODAL MASSAGE</div>
        <div>
          <div
            onClick={() => dispatch(isModalMASReducer(false))}
            className={css`
              position: absolute;
              top: 0;
              right: 0;
              cursor: pointer;
            `}
          >
            крест
          </div>
        </div>
      </div>
    </div>
  )
}
