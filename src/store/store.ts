import { configureStore, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { authAPI } from '@/features/auth'

const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store
