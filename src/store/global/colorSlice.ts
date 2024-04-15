// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

export interface LoadSlice {
  load: booleans
}

const initialState: LoadState = {
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
