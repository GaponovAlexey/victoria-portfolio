import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalMed: false,
  isPedModalCOS: false,
  isModalMAS: false,
  isPedModalSmile: false,
  comentData: [
    {
      coment:
        'Обожаю этого мастера, я прихожу с сыном иногда, так у него вообще всегда все по вышке, и фрукты, и мультики, и мягко-удобно)) Ноготочки летний восторг 💞Спасибо!',
      user: 'Александра Сергеева',
    },
    {
      coment:
        'Обалденно! 30 минут и белоснежный зубки готовы! Действует даже на виниры💪 супер!',
      user: 'Лилия',
    },
    {
      coment:
        'Отличный специалист и ее работа. Пришла по совету подруги и вот на протяжении более пяти лет доверяю рукам только данного мастера. Стерильно, быстро по времени и качественно. До последнего визита делала только педикюр, но в последний раз удалось урвать время на массаж лица, это было бесподобно, эффект был с первого раза 👍👍',
      user: 'Катя',
    },
  ],
}

const reducerData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    isModalMedReducer: (state, { payload }) => {
      state.isModalMed = payload
    },
    isPedModalCOSReducer: (state, { payload }) => {
      state.isPedModalCOS = payload
    },
    isModalMASReducer: (state, { payload }) => {
      state.isModalMAS = payload
    },
    isPedModalSmileReducer: (state, { payload }) => {
      state.isPedModalSmile = payload
    },
  },
})

export const {
  isModalMedReducer,
  isPedModalSmileReducer,
  isPedModalCOSReducer,
  isModalMASReducer,
} = reducerData.actions

export default reducerData.reducer
