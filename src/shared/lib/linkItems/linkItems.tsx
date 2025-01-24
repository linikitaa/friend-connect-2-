import { ReactNode } from 'react'
import { ProfileIcon } from '@/shared/image/icons/ProfileIcon'
import { UsersIcon } from 'lucide-react'
import { ChatIcon } from '@/shared/image/icons/ChatIcon'
import { NewsIcon } from '@/shared/image/icons/NewsIcon'

export type MenuItems = {
  id: string
  title: string
  icon: ReactNode
}
export const menuItems: MenuItems[] = [
  { id: 'profile', title: 'Profile', icon: <ProfileIcon /> },
  { id: 'users', title: 'Users', icon: <UsersIcon /> },
  { id: 'chat', title: 'Chat', icon: <ChatIcon /> },
  { id: 'news', title: 'News', icon: <NewsIcon /> },
]
