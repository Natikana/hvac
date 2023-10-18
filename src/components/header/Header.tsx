import scss from './Header.module.scss'
import { NavBar } from '@/components/header/navBar/NavBar.tsx'
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
    <section className={color ? `${scss.header} ${scss.headerColour}` : scss.header}>
      <div className={scss.headerBlock}>
        <div className={scss.contacts}>
          <h1 className={scss.logo}>logo</h1>
          <ul>
            <li className={scss.contact}>
              <i className="fa fa-phone" />
              <a href="tel:48 574 107 642" className={scss.text}>
                (48) 574 107 642
              </a>
            </li>
            <li className={scss.contact}>
              <i className="fa fa-envelope" />
              <a href="mailto:janmashkov@gmail.com" className={scss.text}>
                janmashkov@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <NavBar />
      </div>
    </section>
  )
}
