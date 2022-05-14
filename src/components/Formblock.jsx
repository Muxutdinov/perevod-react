import React from 'react'

const Formblock = () => {
  return (
    <section class="form-block">
    <div class="container">
       <div class="forms">
          <div data-aos-duration="1200" data-aos="zoom-in-right" class="form">
             <h3 class="form__title">Купить автомобиль</h3>
             <h4 class="form__item-name">Кузов</h4>
             <div class="form__item">
                <select name="met">
                   <option value="1">Хетчбек</option>
                   <option value="2">Кроссовер</option>
                   <option value="3">Седан</option>
                   <option selected value="4">Универсал</option>
                </select>
             </div>

             <h4 class="form__item-name">Год выпуска</h4>
             <div class="renge-wrapper">
                <div class="slider">
                   <div class="progress"></div>
                </div>
                <div class="range-input">
                   <input type="range" class="range-min" min="0" max="10000" value="2500" step="100"/>
                   <input type="range" class="range-max" min="0" max="10000" value="7500" step="100"/>
                </div>
                <div class="price-input">
                   <div class="field">
                      <span>От</span>
                      <input type="number" class="input-min" value="2500"/>
                   </div>
                   <div class="field">
                      <span>К</span>
                      <input type="number" class="input-max" value="7500"/>
                   </div>
                </div>
             </div>
             <h4 class="form__item-name">Километраж</h4>
             <div class="renge-wrapper">
                <div class="slider">
                   <div class="progress"></div>
                </div>
                <div class="range-input">
                   <input type="range" class="range-min" min="0" max="10000" value="2500" step="100"/>
                   <input type="range" class="range-max" min="0" max="10000" value="7500" step="100"/>
                </div>
                <div class="price-input">
                   <div class="field">
                      <span>От</span>
                      <input type="number" class="input-min" value="2500"/>
                   </div>
                   <div class="field">
                      <span>К</span>
                      <input type="number" class="input-max" value="7500"/>
                   </div>
                </div>
             </div>
             <h4 class="form__item-name">Цена</h4>
             <div class="renge-wrapper">
                <div class="slider">
                   <div class="progress"></div>
                </div>
                <div class="range-input">
                   <input type="range" class="range-min" min="0" max="10000" value="2500" step="100"/>
                   <input type="range" class="range-max" min="0" max="10000" value="7500" step="100"/>
                </div>
                <div class="price-input">
                   <div class="field">
                      <span>От</span>
                      <input type="number" class="input-min" value="2500"/>
                   </div>
                   <div class="field">
                      <span>К</span>
                      <input type="number" class="input-max" value="7500"/>
                   </div>
                </div>
                <button class="form__button">Продать автомобиль</button>
             </div>
          </div>
          <div data-aos-duration="1200" data-aos="zoom-in-left" class="form">
             <h3 class="form__title">Купить автомобиль</h3>
             <h4 class="form__item-name">Марка</h4>
             <div class="form__item">
                <input type="text" placeholder="Марка вашего автомобиля"/>
             </div>
             <h4 class="form__item-name">Модель</h4>
             <div class="form__item">
                <input type="text" placeholder="Модель вашего автомобиля"/>
             </div>
             <h4 class="form__item-name">Год выпуска</h4>
             <div class="form__item">
                <input type="text" placeholder="Год выпуска вашего автомобиля (цифрами). Например: 2007"/>
             </div>
             <h4 class="form__item-name">Пробег</h4>
             <div class="form__item">
                <input type="text" placeholder="Пробег в км. вашего автомобиля (цифрами). Например: 25000"/>
             </div>


             <h4 class="form__item-name form__item-name-row">Контактные данные</h4>
             <div class="form__list">
                <div class="form__item">
                   <input type="text" placeholder="Ваше Имя"/>
                </div>
                <div class="form__item">
                   <input type="text" placeholder="Ваш Телефон"/>
                </div>
                <div class="form__item">
                   <input type="text" placeholder="Ваш Email"/>
                </div>
             </div>
             <button class="form__button">Продать автомобиль</button>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Formblock