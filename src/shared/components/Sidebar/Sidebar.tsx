import { clsx } from 'clsx'
import s from './sidebar.module.css'
import Link from 'next/link'

type SidebarProps = {
  className?: string
}
export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={clsx(s.Sidebar, className)}>
      <div className="flex flex-col gap-3.5">
        <Link href="/profile">profile</Link>
        <Link href="/users">users</Link>
        <Link href="/chat">chat</Link>
        <Link href="/news">news</Link>
      </div>
    </div>
  )
}
