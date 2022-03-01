import { css } from '@emotion/css'
import React, { useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  const [Isactive, setIsactive] = useState(true)

  useLayoutEffect(() => {
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight = document.querySelector('.header').clientHeight
      let target = document.querySelector(targetEl)
      let targetPosition = target.getBoundingClientRect().top - headerElHeight
      let startPosition = window.pageYOffset
      let startTime = null

      const ease = function (t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
      }

      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startPosition, targetPosition, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
      requestAnimationFrame(animation)
    }

    const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll')
      links.forEach((each) => {
        each.addEventListener('click', function () {
          const currentTarget = this.getAttribute('href')
          smoothScroll(currentTarget, 1000)
        })
      })
    }
    scrollTo()
  }, [])

  return (
    <header
      className={'header'}
    >
      <div
        className={css`
        position: fixed;
        z-index: 20;
          ${Isactive &&
          `@media (max-width: 769px) {
              display: none;
            }`}
          ${!Isactive &&
          `@media (max-width: 769px) {
            position: fixed;
            background-color: #000;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            color: white;
            display: inherit;
            padding: 50px;
            font-size: 42px;
            li {
              margin-bottom: 30px;
            }
           }`}
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
        {!Isactive && (
          <div
            onClick={() => setIsactive(!Isactive)}
            className={css`
              ${Isactive &&
              `@media (max-width: 768px) {
                  display: none;
                }`}
              position: fixed;
              top: 20px;
              right: 20px;
              color: red;
            `}
          >
            &#10060;
          </div>
        )}
        <li>
          <a className='js-scroll' href='#home'>
            {LanguageENG ? 'Home' : 'Главная'}
          </a>
        </li>
        <li>
          <a  className='js-scroll' href='#about'>{LanguageENG ? 'About' : 'Обо мне'}</a>
        </li>
        {/* <li><a className='js-scroll' href="#skils">{LanguageENG ? 'Skills' : 'Услуги'}</a></li> */}
        <li>
          <a className='js-scroll' href='#comments'>{LanguageENG ? 'Comments' : 'Отзывы'}</a>
        </li>
        <li>
          <a className='js-scroll' href='#certificates'>
            {LanguageENG ? 'Certificates' : 'Сертификаты'}
          </a>
        </li>
        <li>
          <a className='js-scroll' href='#map'>{LanguageENG ? 'Map' : 'Как меня найти'}</a>
        </li>
        <li>
          <a className='js-scroll' href='#contacts'>{LanguageENG ? 'Contacts' : 'Контакты'}</a>
        </li>
      </div>

      <div
        onClick={() => setIsactive(!Isactive)}
        className={css`
          position: fixed;
          top: 15px;
          @media (min-width: 769px) {
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
