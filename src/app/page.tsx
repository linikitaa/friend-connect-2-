'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/profile')
  }, [router])

  return null // Ничего не рендерим, так как сразу выполняется редирект
}
