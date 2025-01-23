import s from './pageLoader.module.css'
import clsx from 'clsx'

export const PageLoader = () => {
  return (
    <div className={clsx(s.pageLoader)}>
      <div className={clsx(s.loader)}></div>
    </div>
  )
}
