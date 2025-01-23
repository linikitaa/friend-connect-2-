import s from './LinkBlock.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { MenuItems } from '@/shared/components/Sidebar/Sidebar'

interface Props {
  className?: string
  item: MenuItems
}

export const LinkBlock = ({ className, item }: Props) => {
  return (
    <Link
      className={s.link}
      key={item.id}
      href={`/${item.title.toLowerCase()}`}
    >
      <span className={s.icon}>{item.icon}</span>
      <span className={s.linkText}> {item.title}</span>
    </Link>
  )
}
