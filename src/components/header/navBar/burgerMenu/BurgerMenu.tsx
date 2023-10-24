import scss from './BurgerMenu.module.scss'
import { NavBar } from '@/components/header/navBar/NavBar.tsx'
import { useState } from 'react'

export const BurgerMenu = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)
  const handlerOpenBurger = () => {
    setOpenBurgerMenu(!openBurgerMenu)
  }
  return (
    <section className={scss.burger}>
      <div className={scss.burgerBtn} onClick={handlerOpenBurger}></div>
      <NavBar
        className={openBurgerMenu ? `${scss.burgerMenu} ${scss.show}` : `${scss.burgerMenu}`}
      />
    </section>
  )
}
