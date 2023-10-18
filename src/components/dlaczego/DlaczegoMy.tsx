import { Title } from '@/styles/common/title/Title.tsx'
import scss from './DlaczegoMy.module.scss'
import { Cart } from '@/components/dlaczego/cart/Cart.tsx'
import chat from '../../../access/img/choice/job-interview.png'
import tools from '../../../access/img/choice/tool.png'
import car from '../../../access/img/choice/car-repair.png'
import common from '../../styles/common/commonSection.module.scss'

export const DlaczegoMy = () => {
  return (
    <section className={` ${common.section} ${scss.choice} `}>
      <Title
        title={'Dlaczego My'}
        subTitle={[
          'We offer a full range of garage services to vehicle owners located in Tucson area.  ',
          <p>Our professinals know how to handle a wide range of car services</p>,
        ]}
      />
      <div className={scss.choiceBlock}>
        <Cart
          image={chat}
          title={'KAŻDA PRACA JEST OSOBISTA'}
          subTitle={
            'Jeśli szukasz jakości, której możesz się spodziewać, ' +
            'ale z bardziej osobistą i przyjazną atmosferą, właśnie ją znalazłeś'
          }
        />
        <Cart
          image={tools}
          title={'NAJLEPSZE MATERIAŁY'}
          subTitle={'Zainwestowaliśmy we wszystkie najnowocześniejsze narzędzia specjalistyczne'}
        />
        <Cart
          image={car}
          title={'PROFESSIONAL STANDARDS'}
          subTitle={
            'Wykonujemy tylko tę pracę, która jest konieczna do rozwiązania Twojego problemu.'
          }
        />
      </div>
    </section>
  )
}
