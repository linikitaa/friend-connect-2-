'use client'

import s from './navbar.module.css'
import { clsx } from 'clsx'
import LoginForm from '@/app/_auth/page'
import { useGetMeQuery, useLogOutMutation } from '@/features/auth'
import { Button } from '@/shared/ui/button'

type NavbarProps = {
  className?: string
  children: string
}

export default function Navbar({ children, className }: NavbarProps) {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout, { isLoading: isLoggingOut }] = useLogOutMutation()

  const logOutHandler = async () => {
    try {
      await logout().unwrap()
      console.log('Logged out successfully')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !data || data.resultCode !== 0) {
    return (
      <div className={clsx(s.navbar, className)}>
        <div>{children}</div>
        <LoginForm />
      </div>
    )
  }

  return (
    <div className={clsx(s.navbar, className)}>
      <div>{children}</div>
      <Button onClick={logOutHandler} disabled={isLoggingOut}>
        Logout
      </Button>
    </div>
  )
}
