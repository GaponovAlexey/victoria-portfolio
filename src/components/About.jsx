import { css } from '@emotion/css'
import React from 'react'

export const About = () => {
  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <div
        className={css`
          position: absolute;
          background: #f6f6f6;
          width: 2000px;
          left: -500px;
          height: 500px;
          z-index: -1;
        `}
      ></div>
      <div
        className={css`
          padding-top: 72px;
          text-align: center;
          line-height: 42px;
          marign: 0 auto;
        `}
      >
        <h2
          className={css`
            text-align: center;
            font-family: GilroyBold;
            font-size: 34px;
            line-height: 42px;
          `}
        >
          About me
        </h2>
        <p
          className={css`
            font-size: 21px;
            line-height: 42px;
            padding-bottom: 107px;
          `}
        >
          Меня зовут Виктория и я обожаю видеть плоды своей работы. В профессии
          с 2014 года. Прошла более 20 курсов Провела больше 6000 процедур Не
          выгораю по трём причинам: Очень люблю то, чем занимаюсь; Постоянно
          развиваюсь; Работаю в разных направлениях. Получаю второе высшее
          образование по специальности "психолог" По первому образованию
          "учитель английского" так что май инглиш из квайт вэл🙃 На этом сайте
          вы сможете увидеть то, чем я могу быть вам полезна, и, возможно, найти
          некоторые ответы на свои вопросы по конкретным проблемам. Записаться
          на процедуру можно здесь.
        </p>
      </div>
    </div>
  )
}
