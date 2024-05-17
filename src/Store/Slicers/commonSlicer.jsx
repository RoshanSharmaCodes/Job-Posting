import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = commonSlice.actions

export default commonSlice.reducer