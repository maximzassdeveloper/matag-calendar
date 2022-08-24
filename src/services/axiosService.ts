import axios from 'axios'
import { getTokenLocal } from './authService'

export const BASE_URL = process.env.SERVER_URL

export const authAxios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL
})

authAxios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getTokenLocal()}`
  }
  return config
})

export default authAxios


export const classicAxios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL
})