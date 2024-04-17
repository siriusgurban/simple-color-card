// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

type colorCodeObj = {
  colorName: string
  colorCode: string
}

type colorState = [
  {
    color: [
      colorCodeObj,
      colorCodeObj,
      colorCodeObj,
      colorCodeObj,
      colorCodeObj,
      colorCodeObj,
    ]
    colorGroup: string
  },
]

const initialState: colorState = {
  colorGroup: [],
}

export const colorSlice = createSlice({
  name: 'colorGroup',
  initialState,
  reducers: {
    colorsHandle: (state, action) => {
      state.colorGroup = [action.payload, ...state.colorGroup]
    },
  },
})

// Action creators are generated for each case reducer function
export const { colorsHandle } = colorSlice.actions

export default colorSlice.reducer
