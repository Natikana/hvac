import scss from './Service.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'
import { CartService } from '@/components/uslugu/cartService/CartService.tsx'
import common from '@/styles/common/commonSection.module.scss'
import airCond from '../../../access/img/refer/joyPare-tinified.jpg'
import vent from '../../../access/img/service/vent2-tinified.jpg'
import heart from '../../../access/img/ogrzewanie-tinified.jpg'
import acIcon from '../../../access/img/service/ac.png'
import ventIcon from '../../../access/img/service/ventilation.png'
import heat from '../../../access/img/service/heat.png'
export const Service = () => {
  return (
    <section id={'offer'} className={` ${common.section} ${scss.service} `}>
      <Title
        title={'Oferta'}
        subTitle={[
          <>
            Nasza firma oferuje kompleksowe rozwiązania, które sprawią,
            <p>
              że Twój dom lub firma będą zawsze komfortowe, niezależnie od warunków atmosferycznych
            </p>
            ,
          </>,
        ]}
      />
      <div className={scss.serviceBlock}>
        <CartService
          icon={acIcon}
          title={'Klimatyzacja'}
          image={airCond}
          subtitle={
            'Dostarczamy i montujemy najnowocześniejsze systemy klimatyzacji, które zapewniają optymalny komfort w każdym pomieszczeniu'
          }
        />
        <CartService
          icon={ventIcon}
          title={'Wentylacja i Chłodnictwo'}
          image={vent}
          subtitle={
            'Oferujemy kompleksowe rozwiązania w zakresie wentylacji i chłodnictwa, aby zadbać o jakość powietrza i odpowiednią temperaturę w Twoim domu lub firmie'
          }
        />
        <CartService
          icon={heat}
          title={'Pompy Ciepła i Hydraulika'}
          image={heart}
          subtitle={
            'Oferujemy energooszczędne pompy ciepła oraz dostosowane rozwiązania w dziedzinie instalacji wodno-kanalizacyjnych'
          }
        />
      </div>
    </section>
  )
}
