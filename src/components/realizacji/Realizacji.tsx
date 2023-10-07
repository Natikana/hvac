import common from '@/styles/common/commonSection.module.scss'
import scss from './Realizacji.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'
import { Carousel } from '@/components/realizacji/carousel/Carousel.tsx'

export const Realizacji = () => {
  return (
    <section className={` ${common.section} ${scss.projects} `}>
      <Title
        title={'Nasze Realizacje'}
        subTitle={[
          'We offer a full range of garage services to vehicle owners located in Tucson area.  ',
          <p>Our professinals know how to handle a wide range of car services</p>,
        ]}
      />
      <Carousel />
    </section>
  )
}
