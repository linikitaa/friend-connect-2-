'use client'

import { useRedirectIfAnonymousWithUser } from '@/shared/hooks/useRedirectIfAnonymousWithUser'
import { PageLoader } from '@/shared/components/PageLoader/PageLoader'

export default function NewsPage() {
  const auth = useRedirectIfAnonymousWithUser()

  if (!auth?.data.id) return <PageLoader />
  return <div>News</div>
}
