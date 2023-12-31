import { Header } from '@/components/header/Header.tsx'
import { Home } from '@/components/home/Home.tsx'
import { Contact } from '@/components/contact/Contact.tsx'
import { Reference } from '@/components/reference/Reference.tsx'
import { DlaczegoMy } from '@/components/dlaczego/DlaczegoMy.tsx'
import scss from '@/App.module.scss'
import { Service } from '@/components/uslugu/Service.tsx'
import { Projects } from '@/components/realizacji/Projects.tsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from '@/components/footer/Footer.tsx'
import { Helmet } from 'react-helmet'
export function useScrollToAnchor() {
  const { pathname, hash, key } = useLocation()
  console.log({ pathname, hash })
  useEffect(() => {
    if (hash === '') window.scrollTo(0, 0)
    else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          })
        }
      }, 0)
    }
  }, [pathname, hash, key])
}
export const AllPages = () => {
  return (
    <>
      <Home />
      <DlaczegoMy />
      <Service />
      <Projects />
      <Reference />
      <Contact />
    </>
  )
}
export function App() {
  useScrollToAnchor()
  return (
    <>
      <Helmet>
        <meta name="description" content="ARTiK page" />
        <title>ARTiK</title>
      </Helmet>
      <div className={scss.app}>
        <Header />
        <AllPages />
        <Footer />
      </div>
    </>
  )
}
