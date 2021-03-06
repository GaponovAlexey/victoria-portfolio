import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './reset.css'
import './fonts/fonts.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
