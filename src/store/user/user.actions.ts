import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from '@/services/authService'
import { IAuthFields, IAuthResponse } from '@/types/user.types'

export const register = createAsyncThunk<IAuthResponse, IAuthFields>(
  'auth/register',
  async (fields: IAuthFields, thunkApi) => {
    try {
      return (await authService.register(fields)).data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data)
    }
  }
)

export const login = createAsyncThunk<IAuthResponse, IAuthFields>(
  'auth/login',
  async (fields: IAuthFields, thunkApi) => {
    try {
      return (await authService.login(fields)).data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const refresh = createAsyncThunk<IAuthResponse>(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      return (await authService.refresh()).data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data)
    }
  }
)