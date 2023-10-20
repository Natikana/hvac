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
    <div className={scss.app}>
      <Header />
      <AllPages />
      {/*
      <Routes>
        <Route path={'/hvac/home'} element={<Home />} />
        <Route path={'/hvac/whyWe'} element={<DlaczegoMy />} />
        <Route path={'/hvac/offer'} element={<Service />} />
        <Route path={'/hvac/projects'} element={<Projects />} />
        <Route path={'/hvac/reference'} element={<Reference />} />
        <Route path={'/hvac/contact'} element={<Contact />} />
      </Routes>*/}
    </div>
  )
}
