import { configureStore } from '@reduxjs/toolkit'
import targetSlice  from './targetSlice'


const store = configureStore({
  reducer: {
    target: targetSlice,

  },
})


export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

