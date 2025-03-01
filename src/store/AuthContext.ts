import { createContext, useContext } from 'react'
import authStore from './AuthStore'

const AuthContext = createContext(authStore)
export const useAuth = () => useContext(AuthContext)
