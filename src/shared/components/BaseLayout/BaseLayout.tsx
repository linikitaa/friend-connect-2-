'use client'
import Sidebar from '@/shared/components/Sidebar/Sidebar'
import Navbar from '@/shared/components/Navbar/Navbar'
import { ReactNode, useEffect } from 'react'
import s from './BaseLayout.module.css'
import { observer } from 'mobx-react-lite'
import { useAuth } from '@/store/AuthContext'
import { useRouter } from 'next/navigation'
type LayoutProps = {
  children: ReactNode
}

const BaseLayout = observer(({ children }: LayoutProps) => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    const checkLogin = async () => {
      await auth.checkAuth()
      if (auth.isAuth) {
        router.replace('/profile')
      }
    }
    checkLogin()
  }, [auth, router])

  return (
    <div className={s.container}>
      <Navbar className={s.navbarWrap} />
      <Sidebar className={s.sidebarWrap} />
      <main className={s.main}>{children}</main>
    </div>
  )
})

export default BaseLayout
