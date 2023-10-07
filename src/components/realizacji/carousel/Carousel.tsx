import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import scss from './Carousel.module.scss'
import { Navigation, Pagination } from 'swiper/modules'

import img1 from '../../../../access/img/ourWork/1 (1).jpg'
import img2 from '../../../../access/img/ourWork/1 (2).jpg'
import img3 from '../../../../access/img/ourWork/1 (3).jpg'
import img4 from '../../../../access/img/ourWork/1 (4).jpg'
import img5 from '../../../../access/img/ourWork/1 (5).jpg'
import img6 from '../../../../access/img/ourWork/1 (6).jpg'
import img7 from '../../../../access/img/ourWork/1 (7).jpg'
import img8 from '../../../../access/img/ourWork/1 (8).jpg'
import img9 from '../../../../access/img/ourWork/1 (9).jpg'
import img10 from '../../../../access/img/ourWork/1 (10).jpg'
import img11 from '../../../../access/img/ourWork/1 (11).jpg'
import img12 from '../../../../access/img/ourWork/1 (12).jpg'
import img13 from '../../../../access/img/ourWork/1 (13).jpg'
import img14 from '../../../../access/img/ourWork/1 (14).jpg'
import img15 from '../../../../access/img/ourWork/1 (15).jpg'
//import img11 from '../../../../access/img/ourWork/1 (1).jpg'
import { v1 } from 'uuid'

export const Carousel = () => {
  const swiperArr: { image: string; id: string }[] = [
    { image: img1, id: v1() },
    { image: img2, id: v1() },
    { image: img3, id: v1() },
    { image: img4, id: v1() },
    { image: img5, id: v1() },
    { image: img6, id: v1() },
    { image: img7, id: v1() },
    { image: img8, id: v1() },
    { image: img9, id: v1() },
    { image: img10, id: v1() },
    { image: img11, id: v1() },
    { image: img12, id: v1() },
    { image: img13, id: v1() },
    { image: img14, id: v1() },
    { image: img15, id: v1() },
  ]

  return (
    <div className={scss.carousel}>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-navigation-color': 'var(--color-dark-300)',
          '--swiper-pagination-color': 'var(--color-dark-300)',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoHeight={false}
        slidesPerView={3}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={scss.swiper}
        freeMode={true}
        speed={800}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {swiperArr.map(el => {
          return (
            <SwiperSlide className={scss.swiperSlide} key={el.id}>
              <img src={el.image} loading="lazy" className={scss.swiperImg} />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
