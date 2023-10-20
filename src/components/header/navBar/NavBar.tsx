import scss from './NavBar.module.scss'
type LinkType = {
  title: string
  href: string
}

export const NavBar = () => {
  const links: LinkType[] = [
    { title: 'Home', href: 'home' },
    { title: 'Dlaczego My', href: 'whyWe' },
    { title: 'Oferta', href: 'offer' },
    { title: 'Projekty', href: 'projects' },
    { title: 'Referencje', href: 'reference' },
    { title: 'Kontakt', href: 'contact' },
  ]
  return (
    <nav className={scss.navBar}>
      {links.map((link, index) => {
        return (
          <a href={`/#${link.href}`} key={index}>
            {link.title}
          </a>
        )
      })}
    </nav>
  )
}
