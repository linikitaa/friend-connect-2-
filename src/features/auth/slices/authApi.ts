import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAccessToken } from '@/store/auth/base-query'

type ResponseType = {
  resultCode: number
  messages: string[]
  data: LoginType
}
type LoginResponse = {
  data: {
    userId: number
    token: string
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
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
  baseQuery: baseQueryWithAccessToken,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    getMe: builder.query<ResponseType, void>({
      query: () => `/me`,
      providesTags: ['Auth'],
    }),
    login: builder.mutation<LoginResponse, IFormInput>({
      query: (authData) => ({
        url: `/login`,
        method: 'POST',
        body: authData,
      }),
      invalidatesTags: ['Auth'],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const res = await queryFulfilled
          const token = res.data?.data.token
          sessionStorage.setItem('access-token', token)
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
