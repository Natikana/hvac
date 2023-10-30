import scss from './ContactMenu.module.scss'
import logo1 from '../../../../../access/img/menu/logo1.png'

export const ContactMenu = () => {
  return (
    <div className={scss.contacts}>
      <img src={logo1} className={scss.logo} alt={'logo'} />
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
