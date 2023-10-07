import scss from './Uslugi.module.scss'
import { Title } from '@/styles/common/title/Title.tsx'
import { CartService } from '@/components/uslugu/cartService/CartService.tsx'
import common from '@/styles/common/commonSection.module.scss'
import airCond from '../../../access/img/service/airCond (2).jpg'
import vent from '../../../access/img/service/vent.jpg'
import heart from '../../../access/img/service/heart.jpg'
import acIcon from '../../../access/img/service/ac.png'
import ventIcon from '../../../access/img/service/ventilation.png'
import heat from '../../../access/img/service/heat.png'
export const Uslugi = () => {
  return (
    <section className={` ${common.section} ${scss.service} `}>
      <Title
        title={'Co Robimy'}
        subTitle={[
          'We offer a full range of garage services to vehicle owners located in Tucson area.  ',
          <p>Our professinals know how to handle a wide range of car services</p>,
        ]}
      />
      <div className={scss.serviceBlock}>
        <CartService
          icon={acIcon}
          title={'Klimatyzacja'}
          image={airCond}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        />
        <CartService
          icon={ventIcon}
          title={'Ventylacja'}
          image={vent}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        />
        <CartService
          icon={heat}
          title={'Instalacja grzewcza'}
          image={heart}
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        />
      </div>
    </section>
  )
}
