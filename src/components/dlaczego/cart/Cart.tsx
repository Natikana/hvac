import { Title } from '@/styles/common/title/Title.tsx'
import { FC } from 'react'
import scss from './cart.module.scss'

type PropsType = {
  title: string
  subTitle: string
  image: string
}
export const Cart: FC<PropsType> = ({ title, subTitle, image }) => {
  return (
    <div className={scss.cart}>
      <img src={image} alt={'chat'} />
      <Title title={title} className={scss.cartTitle} />
      <span className={scss.subTitle}>{subTitle}</span>
    </div>
  )
}
