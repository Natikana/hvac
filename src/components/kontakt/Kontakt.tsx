import common from '@/styles/common/commonSection.module.scss'
import scss from './Kontakt.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'

export const Kontakt = () => {
  return (
    <section className={` ${common.section} ${scss.sectionContact} `}>
      <div>
        <Title title={'Kontakt'} subTitle={'We would be happy to answer your questions.'} />
        <div className={scss.contactBlock}>
          <div className={scss.contactDate}>
            <h3>ARTiK Yauheni Mashkouski</h3>
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
              <li className={scss.contact}>
                <i className="fa fa-hourglass" />
                <span className={scss.text}>Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
              </li>
              <li className={scss.contact}>
                <i className="fa fa-address-card" />
                <span className={scss.text}>ul. Goławicka 9, 03-550 Warszawa</span>
              </li>
              <li className={scss.contact}>
                <i className="fa fa-legal" />
                <span className={scss.text}>NIP: 5242878677</span>
              </li>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
            width={'50%'}
            height={400}
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
            title="ARTiK Yauheni Mashkouski"
          />
        </div>
      </div>
    </section>
  )
}
