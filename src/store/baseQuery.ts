import { getTokenLocal } from '@/services/authService'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = (url: string = '') => fetchBaseQuery({
  baseUrl: `${process.env.SERVER_URL}${url}`,
  prepareHeaders: headers => {
    const token = getTokenLocal()

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  }
})