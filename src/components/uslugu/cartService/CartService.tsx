import scss from './CartService.module.scss'
import { FC } from 'react'

type PropsType = {
  title: string
  subtitle: string
  image: string
  icon: string
}
export const CartService: FC<PropsType> = ({ title, subtitle, image, icon }) => {
  return (
    <div className={scss.cartService}>
      <img src={image} alt={'serviceFoto'} />
      <div className={scss.titleBlock}>
        <img src={icon} className={scss.icon} alt={'iconService'} />
        <div className={scss.serviceDescrb}>
          <span className={scss.title}>{title}</span>
          <span className={scss.subTitle}>{subtitle}</span>
        </div>
      </div>
    </div>
  )
}
