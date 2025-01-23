import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ResponseType = {
  resultCode: number
  messages: string[]
  data: LoginType
}

type LoginType = {
  id: number
  email: string
  login: string
}
type IFormInput = {
  email: string
  password: string
  rememberMe?: boolean
}
export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/auth',
    prepareHeaders: (headers) => {
      headers.set('API-KEY', 'ddeb87c9-686e-4e79-b6dc-c67a6789e900')
      return headers
    },
    credentials: 'include',
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    getMe: builder.query<ResponseType, void>({
      query: () => `/me`,
      providesTags: ['Auth'],
    }),
    login: builder.mutation<{ userId: number; token: string }, IFormInput>({
      query: (authData) => ({
        url: `/login`,
        method: 'POST',
        body: authData,
      }),
      invalidatesTags: ['Auth'],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          // sessionStorage.setItem('access-token', data.token)
        } catch (err) {
          console.log(err)
        }
      },
    }),
    logOut: builder.mutation<ResponseType, void>({
      query() {
        return {
          url: '/login',
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useGetMeQuery, useLoginMutation, useLogOutMutation } = authAPI
