import common from '@/styles/common/commonSection.module.scss'
import scss from './Contact.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'

export const Contact = () => {
  return (
    <section id={'contact'} className={` ${common.section} ${scss.sectionContact} `}>
      <div>
        <Title
          title={'Kontakt'}
          subTitle={[
            <>
              Skontaktuj się z nami już dziś, aby dowiedzieć się więcej
              <p>o naszych usługach i znaleźć najlepsze rozwiązanie dla swoich potrzeb</p>
            </>,
          ]}
        />
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
                <span className={scss.text}>Pn - Sob 8.00 - 19.00. Niedziela: Zamknięte</span>
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
            <span>
              Niech <b>Twój komfort</b> nie zależy od warunków pogodowych. Wybierz <b>ARTiK</b> i
              ciesz się doskonałym klimatem przez cały rok!
            </span>
          </div>
          <iframe
            src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=52.270488,21.054492&output=embed&q=Go%C5%82awicka,+03-550+Warszawa,+Polska+(Go%C5%82awicka)&z=16"
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
