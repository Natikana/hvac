import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

import common from '@/styles/common/commonSection.module.scss'
import scss from './Reference.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'

import img1_1 from '../../../access/img/referList/iz2.jpg'
import img2_2 from '../../../access/img/referList/yurij2.jpg'
import img3_3 from '../../../access/img/referList/klima_2.jpg'
import img4_4 from '../../../access/img/referList/rados2.jpg'
import img5_5 from '../../../access/img/referList/5_5.jpg'

import img1 from '../../../access/img/referList/iz1.png'
import img2 from '../../../access/img/referList/yurij.png'
import img3 from '../../../access/img/referList/klima.png'
import img4 from '../../../access/img/referList/rados.png'
import img5 from '../../../access/img/referList/5.png'
import { v1 } from 'uuid'
export const Reference = () => {
  const swiperArr: { image: string; id: string }[] = [
    { image: img1, id: v1() },
    { image: img2, id: v1() },
    { image: img3, id: v1() },
    { image: img4, id: v1() },
    { image: img5, id: v1() },
  ]
  const swiperArrPeople: { image: string; id: string }[] = [
    { image: img1_1, id: v1() },
    { image: img2_2, id: v1() },
    { image: img3_3, id: v1() },
    { image: img4_4, id: v1() },
    { image: img5_5, id: v1() },
  ]

  return (
    <section id={'reference'} className={` ${common.section} ${scss.refer} `}>
      <Title
        title={'Referencje'}
        subTitle={[
          'Nasza reputacja i sukcesy opierają się na zadowoleniu Naszych Klientów.  ',
          <p>Oto, co Nasi Partnerzy mówią o współpracy z Nami</p>,
        ]}
      />
      <div className={scss.referBlock}>
        <Swiper
          className={scss.swiper}
          slidesPerView={1}
          autoHeight={false}
          navigation={false}
          modules={[Navigation, Autoplay]}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
          }}
        >
          {swiperArr.map(el => {
            return (
              <SwiperSlide key={el.id} className={scss.center}>
                <img
                  src={el.image}
                  loading="lazy"
                  className={scss.swiperImg}
                  alt={'img'}
                  style={{ width: 'auto', height: '400px' }}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          className={`${scss.swiper2}`}
          slidesPerView={1}
          autoHeight={false}
          navigation={false}
          modules={[Navigation, Autoplay]}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
          }}
        >
          {swiperArrPeople.map(el => {
            return (
              <SwiperSlide key={el.id}>
                <img
                  src={el.image}
                  loading="lazy"
                  className={scss.swiperImg}
                  alt={'img'}
                  style={{ width: 'auto', height: '400px' }}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
