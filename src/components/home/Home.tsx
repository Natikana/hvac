import main from '../../../access/img/6.png'
import scss from './Home.module.scss'
export const Home = () => {
  return (
    <section className={scss.home}>
      <img src={main} alt={'main'} className={scss.homeImg} />
      <div className={scss.titleBlock}>
        <h2 className={scss.title}>Zapewniamy Idealny Komfort w Twoim Domu</h2>
        <h5 className={scss.subTitle}>
          Nasza firma zajmująca się klimatyzacyj i wentylacyj, na którą możesz liczyć
        </h5>
      </div>
    </section>
  )
}
