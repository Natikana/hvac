import { Header } from '@/components/header/Header.tsx'
import { Home } from '@/components/home/Home.tsx'
import { Contact } from '@/components/contact/Contact.tsx'
import { Reference } from '@/components/reference/Reference.tsx'
import { DlaczegoMy } from '@/components/dlaczego/DlaczegoMy.tsx'
import scss from '@/App.module.scss'
import { Service } from '@/components/uslugu/Service.tsx'
import { Projects } from '@/components/realizacji/Projects.tsx'

export function App() {
  return (
    <div className={scss.app}>
      <Header />
      <Home />
      <DlaczegoMy />
      <Service />
      <Projects />
      <Reference />
      <Contact />
    </div>
  )
}
