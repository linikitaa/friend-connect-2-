'use client'
import Sidebar from '@/shared/components/Sidebar/Sidebar'
import Navbar from '@/shared/components/Navbar/Navbar'
import { ReactNode, useState } from 'react'
import s from './BaseLayout.module.css'
type LayoutProps = {
  children: ReactNode
}

export default function BaseLayout({ children }: LayoutProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  return (
    <div className={s.container}>
      <Navbar
        className={s.navbarWrap}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      {isSidebarVisible && <Sidebar className={s.sidebarWrap} />}
      <main className={s.main}>{children}</main>
    </div>
  )
}
