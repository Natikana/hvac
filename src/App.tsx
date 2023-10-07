import { Header } from '@/components/header/Header.tsx'
import { Home } from '@/components/home/Home.tsx'
//import { Kontakt } from '@/components/kontakt/Kontakt.tsx'
import { Realizacji } from '@/components/realizacji/Realizacji.tsx'
import { Referencji } from '@/components/referencji/Referencji.tsx'
import { Uslugi } from '@/components/uslugu/Uslugi.tsx'
import { DlaczegoMy } from '@/components/dlaczego/DlaczegoMy.tsx'
import scss from '@/App.module.scss'

export function App() {
  return (
    <div className={scss.app}>
      <Header />
      <Home />
      {/* <Onas />*/}
      <DlaczegoMy />
      <Uslugi />
      <Realizacji />
      <Referencji />

      {/*<Kontakt />*/}
    </div>
  )
}
