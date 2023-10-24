import { HeaderMenu } from '@/components/header/headerMenu/HeaderMenu.tsx'
import { BurgerMenu } from '@/components/header/navBar/burgerMenu/BurgerMenu.tsx'
import scss from './Header.module.scss'
import { useState } from 'react'

export const Header = () => {
  const [color, setColor] = useState(false)
  const changeColour = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColour)
  return (
    <div className={color ? `${scss.header} ${scss.headerColour}` : scss.header}>
      <HeaderMenu />
      <BurgerMenu />
    </div>
  )
}
