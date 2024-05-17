import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {},
  active: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileData: (state, action) => {
       state.info = action.payload
       state.active = true
    },
    deleteProfileData: (state) => {
      state.info = {}
      state.active = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateProfileData, deleteProfileData } = profileSlice.actions

export default profileSlice.reducer