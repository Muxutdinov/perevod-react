import React from "react";
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__title">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis
          adipisci!
        </span>
      </div>
      <div className="row-slide">
        <div className="slider__body">
          <h2 className="slider__body-title">
            Выгодный автокредит в Узбекистане
          </h2>
          <div className="slider__body-descr">
            Поможем <span> купить или продать</span> автомобиль по выгодной
            цене!
          </div>
          <button className="slider__body-button">КОНСУЛЬТАЦИЯ</button>
        </div>
        <div className="slider__container">
          <div className="swiper swiper-slide-big">
            <div className="swiper-wrapper ">
              <div className="swiper-slide">
                <Link to="/">
                  <img src="img/slider/rauto-imgmn2.png" alt="img" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link to="/">
                  <img src="img/slider/damas.png" alt="img" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link to="/">
                  <img src="img/slider/infnexia-tinified.png" alt="img" />
                </Link>
              </div>
              <div className="swiper-slide">
                <Link to="/">
                  <img src="img/slider/coba2-tinified.png" alt="img" />
                </Link>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            {/* If we need pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
