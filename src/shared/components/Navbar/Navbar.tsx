'use client'

import s from './navbar.module.css'
import { clsx } from 'clsx'
import LoginForm from '@/app/_auth/page'
import { useGetMeQuery, useLogOutMutation } from '@/features/auth'
import { Button } from '@/shared/ui/button'
import { PageLoader } from '@/shared/components/PageLoader/PageLoader'
import { useState } from 'react'
import { LinkBlock } from '@/shared/components/LinkBlock/LinkBlock'
import { menuItems } from '@/shared/lib/linkItems/linkItems'
import { DropdownMenuItems } from '@/shared/components/DropdownMenuItems/DropdownMenuItems'

type NavbarProps = {
  className?: string
  isSidebarVisible: boolean
  setIsSidebarVisible: (visible: boolean) => void
}

export default function Navbar({
  className,
  isSidebarVisible,
  setIsSidebarVisible,
}: NavbarProps) {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout, { isLoading: isLoggingOut }] = useLogOutMutation()

  const logOutHandler = () => {
    logout()
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (isLoading) {
    return (
      <div className={clsx(s.navbar, className)}>
        <div>
          <p>Friend</p> connect
        </div>
        <PageLoader />
      </div>
    )
  }

  if (isError || !data || data.resultCode !== 0) {
    return (
      <div className={clsx(s.navbar, className)}>
        <div>
          <p>Friend</p> connect
        </div>
        <LoginForm />
      </div>
    )
  }

  return (
    <div className={clsx(s.navbar, className)}>
      <div>
        <p>Friend</p> connect
      </div>
      <Button
        className={s.logBtn}
        onClick={logOutHandler}
        disabled={isLoggingOut}
      >
        Logout
      </Button>
      <div className={s.mobileMenu}>
        <DropdownMenuItems />
      </div>
    </div>
  )
}
