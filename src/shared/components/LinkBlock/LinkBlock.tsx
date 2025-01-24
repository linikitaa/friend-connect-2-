import s from './LinkBlock.module.css'
import Link from 'next/link'
import { MenuItems } from '@/shared/lib/linkItems/linkItems'

interface Props {
  className?: string
  item: MenuItems
}

export const LinkBlock = ({ item }: Props) => {
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
