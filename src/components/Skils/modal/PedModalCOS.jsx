import { css } from '@emotion/css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isPedModalCOSReducer } from '../../../Redux/reducer'

export const PedModalCOS = () => {
  const { isPedModalCOS } = useSelector((store) => store.data)
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
          ${!isPedModalCOS ? `visibility: hidden;` : ``}
        `}
      >
        <div>Cosmetic</div>
        <div>
          <div
            onClick={() => dispatch(isPedModalCOSReducer(false))}
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
