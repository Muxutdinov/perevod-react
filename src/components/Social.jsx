import React from "react";
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <section className="social">
      <div className="container">
        <div className="social__title">
          <span></span>
          <h2>Новые поступления</h2> <span></span>
        </div>
        <div className="social__row">
          <div className="social__block">
            {" "}
            Подпишитесь на рассылку
            <span> Узнавайте первыми о новых поступлениях автомобилей</span>
          </div>
          <div className="social__buttons">
            <Link to="/" className="social__button">
              <img
                src="icons/viber.svg"
                alt="icons"
                className="social__btm-icon"
              />
              <span>Viber</span>
            </Link>
            <Link to="/" className="social__button">
              <img
                src="icons/telegram.svg"
                alt="icons"
                className="social__btm-icon"
              />
              <span> Telegram</span>
            </Link>
            <Link to="/" className="social__button">
              <img
                src="icons/email-white.svg"
                alt="icons"
                className="social__btm-icon"
              />
              <span> E-mail</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
