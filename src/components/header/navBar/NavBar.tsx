import scss from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'
type LinkType = {
  title: string
  href: string
}
type PropsType = {
  className?: string
}
export const NavBar: FC<PropsType> = ({ className }) => {
  const links: LinkType[] = [
    { title: 'Home', href: 'home' },
    { title: 'Dlaczego My', href: 'whyWe' },
    { title: 'Oferta', href: 'offer' },
    { title: 'Projekty', href: 'projects' },
    { title: 'Referencje', href: 'reference' },
    { title: 'Kontakt', href: 'contact' },
  ]
  return (
    <nav className={`${scss.navBar} ${className}`}>
      {links.map((link, index) => {
        return (
          <Link to={{ pathname: `hvac/${link.href}`, hash: link.href }} key={index}>
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}
