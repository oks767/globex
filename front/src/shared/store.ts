import { configureStore } from '@reduxjs/toolkit'
import  usersSlice from './usersSlice'

export const store = configureStore({
  reducer: {
     users: usersSlice.reducer
  },
})


export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']