import React from 'react'

const Advantages = () => {
  return (
    <section class="advantages">
    <div class="container">
       <div class="advantages__title cards-slider__title">
          <span></span>
          <h2>НАШИ ПРЕИМУЩЕСТВА</h2> <span></span>
       </div>
       <div class="advantages__row">
          <div data-aos-duration="900" data-aos="fade-up" class="advantages__item">
             <div class="advantages__img"><img src="icons/ico1.png" alt="icons"/></div>
             <div class="advantages__name">Минимум документов</div>
             <div class="advantages__descr">Вам понадобятся всего один документ - паспорт</div>
          </div>
          <div data-aos-duration="900" data-aos="fade-down" class="advantages__item">
             <div class="advantages__img"><img src="icons/ico2.png" alt="icons"/></div>
             <div class="advantages__name">Привлекательные условия</div>
             <div class="advantages__descr">У нас действуют специальные партнерские программы с выгодными условиями по кредиту и гибкий график</div>
          </div>
          <div data-aos-duration="900" data-aos="fade-up" class="advantages__item">
             <div class="advantages__img"><img src="icons/ico3.png" alt="icons"/></div>
             <div class="advantages__name">Досрочное погашение</div>
             <div class="advantages__descr">Возможность погасить кредит полностью или частично в любую дату без комиссий</div>
             
          </div>
       </div>
    </div>
 </section>
  )
}

export default Advantages