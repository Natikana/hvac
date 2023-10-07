import scss from './Header.module.scss'

import { NavBar } from '@/components/header/navBar/NavBar.tsx'
import { SubHeader } from '@/components/header/subHeader/SubHeader.tsx'

export const Header = () => {
  return (
    <section className={scss.header}>
      <SubHeader />
      <div className={scss.headerBlock}>
        <h1 className={scss.logo}>logo</h1>
        <NavBar />
      </div>
    </section>
  )
}
