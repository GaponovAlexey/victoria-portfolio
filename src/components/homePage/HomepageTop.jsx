import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { isLanguageENG } from '../../Redux/reducer'

export const HomepageTop = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  const dispatch = useDispatch()
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 108px 0px 15px 0px;
        align-items: center;
        @media (max-width: 768px) {
          max-width: 710px;
        }
        @media (max-width: 567px) {
          max-width: 520px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
        }
      `}
    >
      <div
        className={css`
          dispaly: flex;
          flex-wrap: wrap;
          height: 123px;
          width: 118px;
          font-family: GilroyBold;
          font-size: 47.3392px;
          line-height: 59px;
        `}
      >
        <div className={css`
         @media (max-width: 768px) {
          max-width: 740px;
          font-size: 40px;
        }
        @media (max-width: 567px) {
          max-width: 520px;
          font-size: 30px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
          font-size: 20px;
        }
        `} >
          {LanguageENG ? (
            <h1>Viktoria Olegovna</h1>
          ) : (
            <h1>Виктория Олеговна</h1>
          )}
        </div>
      </div>
      {LanguageENG ? (
        <div>
          Pedicure Professional <br /> 33 years old,
          <br /> Komendantsky Prospekt (Saint Petersburg)
        </div>
      ) : (
        <div>
          Профессиональный педикюр <br /> 33 года, 5 лет стажа
          <br /> Комендантский проспект (Санкт Петербург)
        </div>
      )}
      <div
        className={css`
          text-align: end;
          font-size: 22px;
        `}
      >
        <div onClick={() => dispatch(isLanguageENG(false))}>RU </div>
        <div onClick={() => dispatch(isLanguageENG(true))}>ENG </div>
      </div>
    </div>
  )
}
