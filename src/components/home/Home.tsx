import scss from './Home.module.scss'
export const Home = () => {
  return (
    <section id={'home'} className={scss.homeSection}>
      <div className={scss.homeImg}>
        <div className={scss.titleBlock}>
          <h1 className={scss.title}>Twój Komfort, Nasza Pasja!</h1>
          <h3 className={scss.subTitle}>
            Witaj w Serwisie ARTiK - Twoim Partnerem w Klimatyzacji i Wentylacji
          </h3>
          <a href="tel:48 574 107 642" className={scss.btn}>
            Zadzwoń do Nas
          </a>
        </div>
      </div>
    </section>
  )
}
