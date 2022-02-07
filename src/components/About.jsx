import { css } from '@emotion/css'
import React from 'react'

export const About = () => {
  return (
    <div
      className={css`
        padding-top: 122px;
        text-align: center;
        line-height: 42px;

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
          margin-bottom: 107px;
        `}
      >
        Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and
        everything connected with it. I'm studying at courses "Web and mobile
        design interfaces" in IT-Academy. Ready to implement excellent projects
        with wonderful people.
      </p>
    </div>
  )
}
