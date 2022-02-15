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
        grid-template-columns: 1fr 3fr 1fr;
        padding: 108px 0px 15px 0px;
        align-items: top;
        @media (max-width: 768px) {
          max-width: 710px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
          padding-top: 80px;
        }
      `}
    >
      <div
        className={css`
          dispaly: flex;
          flex-wrap: wrap;
          width: 118px;
          height: 100px;
          font-family: GilroyBold;
          @media (max-width: 768px) {
            max-width: 740px;
            font-size: 40px;
          }
          @media (max-width: 420px) {
            max-width: 350px;
            font-size: 12px;
          }
        `}
      >
        <div
          className={css`
            @media (max-width: 768px) {
              font-size: 40px;
            }
            @media (max-width: 420px) {
              font-size: 12px;
            }
          `}
        >
          {LanguageENG ? (
            <h1
              className={css`
                font-size: 34px;
                @media (max-width: 768px) {
                  font-size: 20px;
                }
                @media (max-width: 420px) {
                  line-height: 24px;
                  font-size: 20px;
                }
              `}
            >
              Podolog <br /> Viktoria <br /> Olegovna
            </h1>
          ) : (
            <h1
              className={css`
                font-size: 34px;
                @media (max-width: 768px) {
                  font-size: 24px;
                }
                @media (max-width: 420px) {
                  font-size: 16px;
                }
              `}
            >
              Подолог
              <br /> Виктория
              <br /> Ясная
            </h1>
          )}
        </div>
      </div>
      <div
        className={css`
          margin: 0 auto;
          @media (max-width: 768px) {
            font-size: 16px;
          }
          @media (max-width: 420px) {
            font-size: 12px;
          }
        `}
      >
        {LanguageENG ? (
          <div>
            Pedicure Professional <br /> in the profession since 2014,
            <br /> Komendantsky Prospekt (Saint Petersburg)
          </div>
        ) : (
          <div>
            Со мной не страшно <br /> В профессии с 2014 года
            <br /> Комендантский проспект (Санкт Петербург)
          </div>
        )}
      </div>
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
