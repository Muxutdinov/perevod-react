import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
       <div class="footer__row">
          <div class="footer__block">
             <h4 class="footer__title">О нас:</h4>
             <div class="footer__line"></div>
             <ul class="footer__list">
                <li class="footer__item">О НАС</li>
                <li class="footer__item">НАШИ КЛИЕНТЫ</li>
                <li class="footer__item">НАША КОМАНДА</li>
                <li class="footer__item">ПОЛИТИКА КАЧЕСТВА</li>
                <li class="footer__item">ВАКАНСИИ</li>
             </ul>
             <div class="footer__line"></div>
             <div class="footer__social">
                <a href="#" class="footer__icon"><img src="icons/facebook.svg" alt="icon"></a>
                <a href="#" class="footer__icon"><img src="icons/instagram.svg" alt="icon"></a>
                <a href="#" class="footer__icon"><img src="icons/youtube.svg" alt="icon"><a>
                      <a href="#" class="footer__icon"><img src="icons/telegram.svg" alt="icon"/></a>
             </div>
          </div>
          <div class="footer__block">
             <h4 class="footer__title">Акции:</h4>
             <div class="footer__line"></div>
             <ul class="footer__list">
                <li class="footer__item">ПОКУПАЙ КАСКО И ПОЛУЧАЙ РАСШИРЕНИЕ НА 100 000 ГРН В ПОДАРОК!</li>
                <li class="footer__item">УСЛУГА ТРЕЙД-ИН = НОВОЕ АВТО + ПОДАРОК!!!</li>
             </ul>
          </div>
          <div class="footer__block">
             <h4 class="footer__title">Эксклюзивно:</h4>
             <div class="footer__line"></div>
             <ul class="footer__list">
                <li class="footer__item">СОБСТВЕННЫЙ ИМПОРТ АВТО ИЗ КОРЕИ</li>
                <li class="footer__item">СОБСТВЕННЫЙ ИМПОРТ АВТО ИЗ ЕВРОПЫ</li>
             </ul>
          </div>
       </div>
    </div>
 </footer>
  )
}

export default Footer