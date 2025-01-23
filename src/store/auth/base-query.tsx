import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQueryWithAccessToken = fetchBaseQuery({
  baseUrl: 'https://social-network.samuraijs.com/api/1.0/auth',
  prepareHeaders: (headers) => {
    headers.set('API-KEY', 'ddeb87c9-686e-4e79-b6dc-c67a6789e900')

    return headers
  },
  credentials: 'include',
})
