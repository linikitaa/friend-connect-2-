'use client'

import { clsx } from 'clsx'
import s from './sidebar.module.css'
import ThemeToggle from '@/shared/components/providers/ThemeProvider/ToggleTheme'
import { LinkBlock } from '@/shared/components/LinkBlock/LinkBlock'
import { menuItems } from '@/shared/lib/linkItems/linkItems'

type SidebarProps = {
  className?: string
}

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
