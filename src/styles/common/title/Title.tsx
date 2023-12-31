import { FC } from 'react'
import scss from './Title.module.scss'

type PropsType = {
  title: string
  subTitle: any
  className?: string
}
export const Title: FC<PropsType> = ({ title, className, subTitle }) => {
  return (
    <div className={`${scss.titleBlock} ${className}`}>
      <h2 className={scss.title}>{title}</h2>
      <h3 className={scss.subTitle}>{subTitle}</h3>
    </div>
  )
}
