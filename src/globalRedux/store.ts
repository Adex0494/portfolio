'use client'

import { configureStore } from "@reduxjs/toolkit"
import pageIndexReducer from './slices/pageIndexSlice'

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch