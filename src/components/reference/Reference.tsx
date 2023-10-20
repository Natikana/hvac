import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
//import SwiperCore, { Autoplay } from 'swiper'
//import { Autoplay } from 'swiper'

import { Navigation, Autoplay } from 'swiper/modules'
import common from '@/styles/common/commonSection.module.scss'
import scss from './Reference.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'

import joyPare from '../../../access/img/refer/joyPare.jpg'
import speakPare from '../../../access/img/refer/speakPare.jpg'
import coldPare from '../../../access/img/refer/coldPare.jpg'
import yellowPare from '../../../access/img/refer/yellowPare.jpg'

import img1 from '../../../access/img/ourWork/1 (1).jpg'
import { v1 } from 'uuid'
import img2 from '../../../access/img/service/airCond (2).jpg'
import img3 from '../../../access/img/ourWork/1 (3).jpg'
import img4 from '../../../access/img/ourWork/1 (4).jpg'
import { useState } from 'react'

export const Reference = () => {
  const swiperArr: { image: string; id: string }[] = [
    { image: img1, id: v1() },
    { image: img2, id: v1() },
    { image: img3, id: v1() },
    { image: img4, id: v1() },
  ]
  const swiperArrPeople: { image: string; id: string }[] = [
    { image: joyPare, id: v1() },
    { image: speakPare, id: v1() },
    { image: coldPare, id: v1() },
    { image: yellowPare, id: v1() },
  ]
  const [noneDisplay, setNoneDisplay] = useState(false)
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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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

        <Swiper
          className={!noneDisplay ? `${scss.swiperNone}` : `${scss.swiper}`}
          slidesPerView={1}
          autoHeight={false}
          navigation={false}
          modules={[Navigation, Autoplay]}
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
