import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@/store/AuthContext'

export const useRedirectIfAnonymousWithUser = () => {
  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    if (!auth.isAuth) {
      router.push('/not_auth')
    }
  }, [auth])

  return auth
}
