import React from 'react'

const Clients = () => {
  return (
    <section class="clients">
    <div class="container">
       <div class="clients__title cards-slider__title">
          <span></span>
          <h2>НАШИ ПРЕИМУЩЕСТВА</h2> <span></span>
       </div>
       <div class=" swiper clients-swiper-slide">
          <div class="swiper-wrapper">
             <div class="swiper-slide">
                <div class="clients__item">
                   <div class="clients__img"><img src="img/clients/client1.webp" alt="icons"/></div>
                   <div class="clients__name">Александр, г. Мариуполь</div>
                </div>
             </div>
             <div class="swiper-slide">
                <div class="clients__item">
                   <div class="clients__img"><img src="img/clients/client1.webp" alt="icons"/></div>
                   <div class="clients__name">Николай, г. Киев</div>
                </div>
             </div>
             <div class="swiper-slide">
                <div class="clients__item">
                   <div class="clients__img"><img src="img/clients/client1.webp" alt="icons"/></div>
                   <div class="clients__name">Александр, г. Киев</div>
                </div>
             </div>
             <div class="swiper-slide">
                <div class="clients__item">
                   <div class="clients__img"><img src="img/clients/client1.webp" alt="icons"/></div>
                   <div class="clients__name">Сергей, г. Чернигов</div>
                </div>
             </div>
          </div>
          {/* <!-- If we need navigation buttons --> */}
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          {/* <!-- If we need pagination --> */}
          <div class="swiper-pagination"></div>
       </div>
    </div>
 </section>
  )
}

export default Clients