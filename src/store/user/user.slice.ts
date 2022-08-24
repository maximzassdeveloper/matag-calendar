import { createSlice } from '@reduxjs/toolkit'
import { logout, register, login, refresh } from './user.actions'
import { IUserState, rejectReducer, successReducer } from './user.helper'

const initialState: IUserState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.error = null
        state.isLoading = true
      })
      .addCase(register.fulfilled, successReducer)
      .addCase(register.rejected, rejectReducer)

      .addCase(login.pending, state => {
        state.error = null
        state.isLoading = true
      })
      .addCase(login.fulfilled, successReducer)
      .addCase(login.rejected, rejectReducer)

      .addCase(logout.fulfilled, rejectReducer)

      .addCase(refresh.fulfilled, successReducer)
  }
})

export const { reducer: userReducer } = userSlice