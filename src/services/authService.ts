import { IAuthFields, IAuthResponse } from '@/types/user.types'
import { classicAxios } from './axiosService'

const LOCAL_TOKEN = 'dyfgdahbtokebhbnz'
const setTokenLocal = (token: string) => localStorage.setItem(LOCAL_TOKEN, token)
const deleteTokenLocal = () => localStorage.removeItem(LOCAL_TOKEN)
export const getTokenLocal = () => localStorage.getItem(LOCAL_TOKEN) ?? ''

export const authService = {
  async register(fields: IAuthFields) {
    const response = await classicAxios.post<IAuthResponse>('/users/register', fields)
    setTokenLocal(response.data.accessToken)
    return response
  },

  async login(fields: IAuthFields) {
    const response = await classicAxios.post<IAuthResponse>('/users/login', fields)
    setTokenLocal(response.data.accessToken)
    return response
  },

  async logout() {
    const response = await classicAxios.get('/users/logout')
    deleteTokenLocal()
    return response
  },

  async refresh() {
    const response = await classicAxios.get<IAuthResponse>('/users/refresh')
    setTokenLocal(response.data.accessToken)
    return response
  }
}