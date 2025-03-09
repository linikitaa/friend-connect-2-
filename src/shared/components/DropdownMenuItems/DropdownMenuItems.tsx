'use client'

import * as React from 'react'
import { Button } from '@/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/shared/ui/dropdown-menu'
import { menuItems } from '@/shared/lib/linkItems/linkItems'
import { LinkBlock } from '@/shared/components/LinkBlock/LinkBlock'
import ThemeToggle from '@/shared/components/providers/ThemeProvider/ToggleTheme'
import { useEffect } from 'react'
import { LogoutIcon } from '@/shared/image/icons/LogoutIcon'
import s from './DropdownMenuItems.module.css'
import { useAuth } from '@/store/AuthContext'

export function DropdownMenuItems() {
  const auth = useAuth()
  const [open, setOpen] = React.useState(false)
  useEffect(() => {
    const handleResize = () => {
      setOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const logOutHandler = () => {
    auth.logout()
  }
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">=</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => (
          <DropdownMenuItem asChild key={item.id}>
            <LinkBlock item={item} />
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="flex justify-around p-2">
          <ThemeToggle />
          <button onClick={logOutHandler}>
            <LogoutIcon className={s.icon} />
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
