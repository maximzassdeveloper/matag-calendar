import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IAuthResponse, IUser } from '@/types/user.types'

export interface IUserState {
  user: IUser | null
  isAuth: boolean
  isLoading: boolean
  error: string | null
}

export const successReducer:
  CaseReducer<IUserState, PayloadAction<IAuthResponse>> = (state, { payload }) => {
    state.user = payload.user
    state.isAuth = true
    state.isLoading = false
    state.error = null
  }

export const rejectReducer: CaseReducer<IUserState> = (state, { payload }) => {
  state.user = null
  state.isAuth = false
  state.isLoading = false
  state.error = payload?.message ?? 'Error'
}