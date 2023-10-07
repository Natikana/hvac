import scss from './SubHeader.module.scss'

export const SubHeader = () => {
  return (
    <section className={scss.subHeader}>
      <ul className={scss.contacts}>
        <li className={scss.contact}>
          <i className="fa fa-phone" />
          <a href="tel:48 574 107 642" className={scss.text}>
            (48) 574 107 642
          </a>
        </li>
        <li className={scss.contact}>
          <i className="fa fa-envelope" />
          <a href="mailto:janmashkov@gmail.com" className={scss.text}>
            janmashkov@gmail.com
          </a>
        </li>
      </ul>
    </section>
  )
}
