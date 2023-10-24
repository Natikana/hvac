import scss from './ContactMenu.module.scss'

export const ContactMenu = () => {
  return (
    <div className={scss.contacts}>
      <h2 className={scss.logo}>logo</h2>
      <ul>
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
    </div>
  )
}
