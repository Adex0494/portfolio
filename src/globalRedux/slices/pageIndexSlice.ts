'use client'

import { createSlice } from '@reduxjs/toolkit';

export interface pageIndexState {
  currentPage: string
}

const initialState: pageIndexState = {
  currentPage: '/'
}

export const pageIndexSlice = createSlice({
  name: 'pageIndex',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {state.currentPage = action.payload}
  }
})

export const {setCurrentPage} = pageIndexSlice.actions

export default pageIndexSlice.reducer