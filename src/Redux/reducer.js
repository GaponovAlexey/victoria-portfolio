import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalMed: false,
  isPedModalCOS: false,
  isModalMAS: false,
  isPedModalSmile: false,
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
