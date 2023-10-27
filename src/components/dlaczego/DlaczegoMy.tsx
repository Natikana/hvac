import { Title } from '@/styles/common/title/Title.tsx'
import scss from './DlaczegoMy.module.scss'
import { Cart } from '@/components/dlaczego/cart/Cart.tsx'
import chat from '../../../access/img/choice/job-interview.png'
import tools from '../../../access/img/choice/tool.png'
import car from '../../../access/img/choice/car-repair.png'
import common from '../../styles/common/commonSection.module.scss'

export const DlaczegoMy = () => {
  return (
    <section id={'whyWe'} className={` ${common.section} ${scss.choice} `}>
      <Title
        title={'Dlaczego ARTiK?'}
        subTitle={[<>Jesteśmy ekspertami w dziedzinie klimatyzacji, pomp ciepła i wentylacji.</>]}
      />
      <div className={scss.choiceBlock}>
        <Cart
          image={chat}
          title={'Wsparcie Klienta'}
          subTitle={
            'Nasza przyjazna obsługa klienta jest dostępna, ' +
            'aby odpowiedzieć na Twoje pytania i rozwiązać ewentualne problemy'
          }
        />
        <Cart
          image={car}
          title={'Profesjonalny Montaż'}
          subTitle={
            'Nasza ekipa montażowa to specjaliści z wieloletnim doświadczeniem, ' +
            'którzy zadba o prawidłowy montaż Twojego systemu'
          }
        />
        <Cart
          image={tools}
          title={'Serwis i Konserwacja'}
          subTitle={
            ' Oferujemy kompleksową obsługę, w tym regularny serwis i konserwację, ' +
            'aby Twój sprzęt działał bez zarzutu przez lata'
          }
        />
      </div>
    </section>
  )
}
