import scss from './HeaderMenu.module.scss'
import { NavBar } from '@/components/header/navBar/NavBar.tsx'
import { ContactMenu } from '@/components/header/headerMenu/contactMenu/ContactMenu.tsx'

export const HeaderMenu = () => {
  return (
    <div className={scss.headerMenu}>
      <ContactMenu />
      <NavBar />
    </div>
  )
}
