import { useRouter } from 'next/navigation'
import { useGetMeQuery } from '@/features/auth'
import { useEffect } from 'react'

export const useRedirectIfAnonymousWithUser = () => {
  const router = useRouter()
  const { data, isFetching } = useGetMeQuery()
  console.log(data)
  useEffect(() => {
    if (isFetching) return // Подождите, пока запрос завершится
    if (!data?.data.id) {
      router.push('/not_auth')
    }
  }, [data, isFetching])

  return data
}
