import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

import scss from './Carousel.module.scss'

//import img1 from '../../../../access/img/ourWork/1 (1).jpg'
//import img3 from '../../../../access/img/ourWork/1 (3).jpg'
import img4 from '../../../../access/img/ourWork/1_(4).jpg'
//import img5 from '../../../../access/img/ourWork/1 (5).jpg'
//import img8 from '../../../../access/img/ourWork/1 (8).jpg'
//import img9 from '../../../../access/img/ourWork/1 (9).jpg'
import img10 from '../../../../access/img/ourWork/1_(10).jpg'
import img11 from '../../../../access/img/ourWork/1_(11).jpg'
//import img14 from '../../../../access/img/ourWork/1 (14).jpg'
//import img15 from '../../../../access/img/ourWork/1 (15).jpg'
//import img16 from '../../../../access/img/ourWork/1 (16).jpg'
import img17 from '../../../../access/img/ourWork/1_(17).jpg'
//import img18 from '../../../../access/img/ourWork/1 (18).jpg'
//import img19 from '../../../../access/img/ourWork/1 (19).jpg'
import img21 from '../../../../access/img/ourWork/1_(21).jpg'
//import img24 from '../../../../access/img/ourWork/1 (24).jpg'
//import img26 from '../../../../access/img/ourWork/1 (26).jpg'
import { v1 } from 'uuid'

export const Carousel = () => {
  const swiperArr: { image: string; id: string }[] = [
    /* { image: img1, id: v1() },
    { image: img3, id: v1() },*/
    { image: img10, id: v1() },
    /*  { image: img5, id: v1() },*/
    { image: img11, id: v1() },
    /* { image: img16, id: v1() },
    { image: img19, id: v1() },
    { image: img24, id: v1() },*/
    { image: img21, id: v1() },
    /*{ image: img8, id: v1() },
    { image: img9, id: v1() },*/
    { image: img10, id: v1() },
    /*{ image: img14, id: v1() },*/
    { image: img4, id: v1() },
    /* { image: img15, id: v1() },*/
    { image: img17, id: v1() },
    /*{ image: img26, id: v1() },
    { image: img18, id: v1() },*/
  ]

  return (
    <div className={scss.carousel}>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-pagination-color': 'var(--color-dark-300)',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        autoHeight={false}
        slidesPerView={3}
        className={scss.swiper}
        freeMode={true}
        navigation={false}
        modules={[Navigation, Autoplay, Pagination]}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          1090: {
            slidesPerView: 2,
          },
          1250: {
            slidesPerView: 3,
          },
        }}
      >
        {swiperArr.map(el => {
          return (
            <SwiperSlide className={scss.swiperSlide} key={el.id}>
              <img
                src={el.image}
                srcSet={`${el.image} 2x, ${el.image} 3x`}
                loading="lazy"
                className={scss.swiperImg}
                alt={'project'}
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
