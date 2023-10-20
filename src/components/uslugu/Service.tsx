import scss from './Service.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'
import { CartService } from '@/components/uslugu/cartService/CartService.tsx'
import common from '@/styles/common/commonSection.module.scss'
import airCond from '../../../access/img/service/airCond (2).jpg'
import vent from '../../../access/img/service/vent.jpg'
import heart from '../../../access/img/service/heart.jpg'
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
          title={'Wentylacja'}
          image={vent}
          subtitle={
            'Nasze systemy wentylacyjne zapewnią świeże powietrze i zdrowe warunki wewnętrzne'
          }
        />
        <CartService
          icon={heat}
          title={'Pompy Ciepła'}
          image={heart}
          subtitle={
            'Oferujemy energooszczędne pompy ciepła, które pomogą Ci obniżyć koszty ogrzewania i chłodzenia'
          }
        />
      </div>
    </section>
  )
}
