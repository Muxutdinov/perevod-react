import React from "react";
import { Link } from 'react-router-dom'
import img from '../../public/img/cards/card.jpg'


const Cards = () => {
  return (
    <section className="cards">
      <div className="cards__row">
        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <Link to="/">Добавить для сравнения</Link>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <a to="/">Добавить для сравнения</a>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <Link to="/">Добавить для сравнения</Link>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <Link to="/">Добавить для сравнения</Link>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <a to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </a>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <a to="/">Добавить для сравнения</a>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <Link to="/">Добавить для сравнения</Link>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <Link to="/">Добавить для сравнения</Link>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>

        <div
          className="cards__card card"
          data-aos="flip-left"
          data-aos-duration="1200"
          data-aos-offset="0"
        >
          <div className="card__img">
            <img src={img} alt="img" />
          </div>
          <Link to="/" className="card__title">
            Hyundai Sonata LPI SMART 2016
          </Link>
          <ul className="card__info">
            <li className="card__item">
              <span className="material-symbols-outlined">
                local_gas_station
              </span>
              <strong> Топливо:</strong> Газ
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">settings</span>
              <strong> Передача:</strong> Автомат
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">album</span>
              <strong> Случай:</strong> Передный
            </li>
            <li className="card__item">
              <span className="material-symbols-outlined">speed</span>
              <strong> Пробежка:</strong> 212000
            </li>
          </ul>
          <div className="card__line"></div>
          <div className="card__price">
            Ціна з ПДВ: <strong>9999</strong> <span>USD</span> 336 466.35 грн.
          </div>
          <button className="card__button">Подробнее</button>
          <div className="card__add">
            <Link to="/">Добавить для сравнения</Link>{" "}
            <button title="Сравнивать" className="material-symbols-outlined">
              balance
            </button>
          </div>
        </div>
      </div>
      <button className="cards__button">ПОКАЗАТИ ВСІ АВТОМОБІЛІ </button>
    </section>
  );
};

export default Cards;
