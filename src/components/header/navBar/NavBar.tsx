import { Link } from 'react-router-dom'
import scss from './NavBar.module.scss'
type LinkType = {
  title: string
  href: string
}

export const NavBar = () => {
  const links: LinkType[] = [
    { title: 'Home', href: 'home' },
    /*{ title: 'O Nas', href: 'oNas' },*/
    { title: 'Dlaczego My', href: 'dlaczego' },
    { title: 'Usługi', href: 'uslugi' },
    { title: 'Realizacji', href: 'realizacji' },
    { title: 'Referencji', href: 'referencji' },
    { title: 'Kontakt', href: 'kontakt' },
  ]
  return (
    <nav className={scss.navBar}>
      {links.map((link, index) => {
        return (
          <Link to={link.href} key={index} className={scss.text}>
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}
