'use client'

import s from './navbar.module.css'
import { clsx } from 'clsx'
import LoginForm from '@/app/_auth/page'
import { useGetMeQuery, useLogOutMutation } from '@/features/auth'
import { Button } from '@/shared/ui/button'
import { PageLoader } from '@/shared/components/PageLoader/PageLoader'

type NavbarProps = {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout, { isLoading: isLoggingOut }] = useLogOutMutation()

  const logOutHandler = () => {
    logout()
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
      <Button onClick={logOutHandler} disabled={isLoggingOut}>
        Logout
      </Button>
    </div>
  )
}
