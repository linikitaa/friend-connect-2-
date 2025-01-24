import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

export const baseQueryWithAccessToken = fetchBaseQuery({
  baseUrl: 'https://social-network.samuraijs.com/api/1.0/auth',
  prepareHeaders: (headers) => {
    headers.set('API-KEY', 'ddeb87c9-686e-4e79-b6dc-c67a6789e900')

    return headers
  },
  credentials: 'include',
})

// create a new mutex
const mutex = new Mutex()
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://social-network.samuraijs.com/api/1.0/auth',
// })
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQueryWithAccessToken(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQueryWithAccessToken(
          'auth/refresh',
          api,
          extraOptions,
        )
        if (refreshResult.data) {
          // @ts-ignore
          sessionStorage.setItem('access-token', refreshResult.data.token)
          // retry the initial query
          result = await baseQueryWithAccessToken(args, api, extraOptions)
        } else {
          // api.dispatch(loggedOut())
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQueryWithAccessToken(args, api, extraOptions)
    }
  }
  return result
}
