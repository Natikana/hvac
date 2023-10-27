import common from '@/styles/common/commonSection.module.scss'
import scss from './Projects.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'
import { Carousel } from '@/components/realizacji/carousel/Carousel.tsx'

export const Projects = () => {
  return (
    <section id={'projects'} className={` ${common.section} ${scss.projects} `}>
      <Title
        title={'Projekty'}
        subTitle={[
          <>
            Dla Naszych Klientów Komfort To Priorytet. Zaufaj Ekspertom - Zaufaj ARTiK!
            <p>Twoja realizacja może być następna!</p>
          </>,
        ]}
      />
      <Carousel />
    </section>
  )
}
