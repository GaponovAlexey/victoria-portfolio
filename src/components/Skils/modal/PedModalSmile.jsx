import { css } from '@emotion/css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isPedModalSmileReducer } from '../../../Redux/reducer'

export const PedModalSmile = () => {
  const { isPedModalSmile } = useSelector((store) => store.data)
  const dispatch = useDispatch()
  return (
    <div>
      <div
        className={css`
          position: fixed;
          top: 20px;
          left: auto;
          background-color: #fff;
          height: 500px;
          width: 960px;
          ${!isPedModalSmile ? `visibility: hidden;` : ``}
        `}
      >
        <div>teeth</div>
        <div>
          <div
            onClick={() => dispatch(isPedModalSmileReducer(false))}
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
