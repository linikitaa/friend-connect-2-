import { useRouter } from 'next/navigation'
import { useGetMeQuery } from '@/features/auth'
import { useEffect } from 'react'

export const useRedirectAuthorized = (redirectTo = '/') => {
  const router = useRouter()
  const { data, isFetching } = useGetMeQuery()

  useEffect(() => {
    if (data?.data.id && !isFetching) {
      router.push(redirectTo)
    }
  }, [data, isFetching])

  return data
}
