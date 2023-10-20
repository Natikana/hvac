import main from '../../../access/img/6_6.png'
import scss from './Home.module.scss'
export const Home = () => {
  let imageStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundImage: `url("${main}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    filter: 'brightness(80%)',
    backgroundPosition: 'center center',
  }
  //<a href="tel:48 574 107 642" className={scss.text}>
  //style={{color:'#EACF78'}}
  return (
    <section id={'home'} className={scss.homeSection}>
      {/* <div style={{ height: '130px' }}></div>*/}
      <div className={scss.homeImg} style={imageStyle}>
        <div className={scss.titleBlock}>
          {/* <span className={scss.subTitle}>
            Call us:
            <h2 style={{ fontSize: '20px' }}>(48) 574 107 642</h2>
          </span>*/}
          {/*<h1 className={scss.title}>Zapewniamy Komfort w Domu</h1>*/}

          <h1 className={scss.title}>Twój Komfort, Nasza Pasja!</h1>
          <h3 className={scss.subTitle}>
            Witaj w Serwisie ARTiK - Twoim Partnerem w Klimatyzacji i Wentylacji
          </h3>
          {/*<h5>
            <b style={{ color: 'var(--color-dark-100)' }}>Jesteśmy ekspertami</b> w dziedzinie{' '}
            <b style={{ color: 'var(--color-dark-100)' }}>klimatyzacji, pomp ciepła i wentylacji</b>
            .
            <br />
            Nasza firma
            <b style={{ color: 'var(--color-dark-100)' }}>oferuje kompleksowe rozwiązania</b>, które
            sprawią, <br />
            że <b style={{ color: 'var(--color-dark-100)' }}>Twój dom lub firma</b> będą
            <b style={{ color: 'var(--color-dark-100)' }}> zawsze komfortowe</b>, niezależnie od
            warunków atmosferycznych
          </h5>*/}
          <a href="tel:48 574 107 642" className={scss.btn}>
            Zadzwoń do Nas
          </a>
        </div>
      </div>
      {/*<div className={scss.home}>
        <div className={scss.titleBlock}>
          <h1 className={scss.title}>Zapewniamy Idealny Komfort w Twoim Domu</h1>
          <h3 className={scss.subTitle}>
            Nasza firma zajmująca się klimatyzacyj i wentylacyj, na którą możesz liczyć
          </h3>
        </div>
        <div className={scss.homeImgBlock}>
          <img src={main} alt={'main'} className={scss.homeImg} />
        </div>
      </div>*/}
    </section>
  )
}
