import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { LanguageENG } = useSelector((state) => state.data)

  const [Isactive, setIsactive] = useState(false)
  console.log(Isactive)
  return (
    <header
      className={css`
        position: fixed;
        z-index: 20;
      `}
    >
      {!Isactive ? (
        <div
          className={css`
            ${Isactive &&
            `@media (max-width: 767px) {
                display: none;
              }`}
            ${!Isactive &&
            `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000`}
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #828282;
            background-color: rgba(255, 255, 255, 0.2);
            width: 960px;
            padding: 33px 0px 32px 0px;
            background-color: rgba(255, 255, 255, 0);
          `}
        >
          <li>{LanguageENG ? 'Home' : 'Главная'}</li>
          <li>{LanguageENG ? 'About' : 'Кто Я'}</li>
          <li>{LanguageENG ? 'Skills' : 'Навыки'}</li>
          <li>{LanguageENG ? 'Comments' : 'Отзывы'}</li>
          <li>{LanguageENG ? 'Certificates' : 'Сертификаты'}</li>
          <li>{LanguageENG ? 'Contacts' : 'Контакты'}</li>
          <li>{LanguageENG ? 'Map' : 'Как меня найти'}</li>
        </div>
      ) : (
        <div></div>
      )}
      <div
        onClick={() => setIsactive(!Isactive)}
        className={css`
          position: fixed;
          top: 15px;
          @media (min-width: 767px) {
            display: none;
          }
        `}
      >
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </div>
    </header>
  )
}
