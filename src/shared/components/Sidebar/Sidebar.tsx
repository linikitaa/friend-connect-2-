'use client'

import { clsx } from 'clsx'
import s from './sidebar.module.css'
import Link from 'next/link'
import ThemeToggle from '@/shared/components/providers/ThemeProvider/ToggleTheme'
import { ProfileIcon } from '@/shared/image/icons/ProfileIcon'
import { UsersIcon } from 'lucide-react'
import { ChatIcon } from '@/shared/image/icons/ChatIcon'
import { NewsIcon } from '@/shared/image/icons/NewsIcon'
import { LinkBlock } from '@/shared/components/LinkBlock/LinkBlock'
import { ReactNode } from 'react'

type SidebarProps = {
  className?: string
}

export type MenuItems = {
  id: string
  title: string
  icon: ReactNode
}
const menuItems: MenuItems[] = [
  { id: 'profile', title: 'Profile', icon: <ProfileIcon /> },
  { id: 'users', title: 'Users', icon: <UsersIcon /> },
  { id: 'chat', title: 'Chat', icon: <ChatIcon /> },
  { id: 'news', title: 'News', icon: <NewsIcon /> },
]

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={clsx(s.Sidebar, className)}>
      <div className="flex flex-col gap-3.5">
        {menuItems.map((item) => {
          return <LinkBlock key={item.id} item={item} />
        })}
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  )
}
