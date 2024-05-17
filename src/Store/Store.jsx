import { configureStore } from '@reduxjs/toolkit'
import ProfileSlicer from './Slicers/ProfileSlicer'

export const store = configureStore({
  reducer: {
    profileReducer: ProfileSlicer
  },
})