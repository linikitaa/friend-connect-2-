import { Button } from '@/shared/ui/button'
import s from './navbar.module.css'
import { clsx } from 'clsx'
type NavbarProps = {
  className?: string
  children: string
}

export default function Navbar({ children, className }: NavbarProps) {
  return (
    <div className={clsx(s.navbar, className)}>
      <div>{children}</div>
      <Button>Login</Button>
    </div>
  )
}
