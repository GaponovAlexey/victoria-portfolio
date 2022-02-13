import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { LanguageENG } = useSelector((state) => state.data)

  const [Isactive, setIsactive] = useState(false)

  return (
    <header
      className={css`
        position: fixed;
        z-index: 20;

        ${Isactive &&
        `@media (max-width: 767px) {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: black;
          color: #fff;
          padding: 0 75px;
        }`}
      `}
    >
      {Isactive && (
        <div
          onClick={() => setIsactive(false)}
          className={css`
            padding-left: 60%;
            font-size: 40px;
          `}
        >
          &#10006;
        </div>
      )}
      <div
        className={css`
          align-items: center;
          justify-content: space-between;
          width: 960px;
          margin: 0 auto;
          border-bottom: 1px solid #828282;
          background-color: rgba(255, 255, 255, 0.6);

          ${!Isactive &&
          `@media (max-width: 767px) {
            display: none;
          }`}
          display: flex;
          flex-wrap: wrap;
          padding: 33px 0px 32px 0px;
          border-bottom: none;
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
    </header>
  )
}
