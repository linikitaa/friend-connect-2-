'use client'

import { useRedirectIfAnonymousWithUser } from '@/shared/hooks/useRedirectIfAnonymousWithUser'
import { PageLoader } from '@/shared/components/PageLoader/PageLoader'

export default function ChatPage() {
  const auth = useRedirectIfAnonymousWithUser()

  if (!auth?.data.id) return <PageLoader />
  return <div>Chat</div>
}
