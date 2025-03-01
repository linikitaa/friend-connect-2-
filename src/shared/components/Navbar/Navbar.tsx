'use client'

import s from './navbar.module.css'
import { clsx } from 'clsx'
import { Button } from '@/shared/ui/button'
import { DropdownMenuItems } from '@/shared/components/DropdownMenuItems/DropdownMenuItems'
import LoginForm from '@/app/_auth/loginForm'
import RegistrationForm from '@/app/_auth/registrationForm'
import { observer } from 'mobx-react-lite'
import { useAuth } from '@/store/AuthContext'
import { ACCESS_TOKEN } from '@/store/AuthStore'

type NavbarProps = {
  className?: string
}

const Navbar = observer(({ className }: NavbarProps) => {
  const auth = useAuth()

  const logOutHandler = () => {
    sessionStorage.removeItem(ACCESS_TOKEN)
    auth.logout()
  }

  if (!auth.isAuth) {
    return (
      <div className={clsx(s.navbar, className)}>
        <div>
          <p>Friend</p> connect
        </div>
        <RegistrationForm />
        <LoginForm />
      </div>
    )
  }

  return (
    <div className={clsx(s.navbar, className)}>
      <div>
        <p>Friend</p> connect
      </div>
      <Button className={s.logBtn} onClick={logOutHandler}>
        Logout
      </Button>
      <div className={s.mobileMenu}>
        <DropdownMenuItems />
      </div>
    </div>
  )
})

export default Navbar
