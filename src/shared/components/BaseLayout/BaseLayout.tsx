'use client'
import Sidebar from '@/shared/components/Sidebar/Sidebar'
import Navbar from '@/shared/components/Navbar/Navbar'
import { ReactNode } from 'react'
import s from './BaseLayout.module.css'
type LayoutProps = {
  children: ReactNode
}

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <div className={s.container}>
      <Navbar className={s.navbarWrap} />
      <Sidebar className={s.sidebarWrap} />
      <main className={s.main}>{children}</main>
    </div>
  )
}
