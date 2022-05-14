import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header">
    <div className="header__info">
       <div className="container">
          <div className="header__location">
             <img src="icons/location.svg" className="header__icon" alt="location"/>
             <address>г.Ташкент, ул. Усмона Носира 113</address>
          </div>
          <div className="header__connection">
             <Link to="/" className="header__tel">
                <img src="icons/smartphone.svg" className="header__icon" alt="location" /> +99895 169 09 88</Link>
             <Link to="/" className="header__email">
                <img src="icons/email.svg" className="header__icon" alt="icon"/>
                info@rauto.uz</Link>
          </div>
          <div className="header__icons ">
             <Link to="/" className="header__icons-item">
                <div className="search-input">
                   <input type="text"/>
                   <span className="close-search"></span>
                </div>
                <button className="search"><img src="icons/search.svg" className="header__icon" alt="location"/></button>
             </Link>
             <Link to="/" className="header__icons-item">
                <button className="material-symbols-outlined">balance</button>
             </Link>
             <Link to="/" className="header__icons-item">
                <img src="icons/dollar.svg" className="header__icon" alt="location"/>
                <span>33.70</span>
             </Link>
          </div>
          <div className="header__respons">
             <div>
                <button className="search header__item">
                   <img src="icons/search.svg" className="header__icon" alt="icon"/>
                </button>
             </div>
             <Link to="/" className="header__item">
                <img src="icons/smartphone.svg" className="header__icon" alt="icon"/> +99895 169 09 88</Link>
             <Link to="/" className="menu__icon nav-icon menu__open">
                <span></span>
             </Link>
          </div>
          <div className="menu header__item">
             <div className="menu__body">
                <h2 className="menu__title">Меню</h2>
                <Link to="/" className="menu__close">
                   <img src="icons/cross.svg" className="header__icon" alt="cross"/>
                </Link>
                <div className="menu__block menu__block-1">
                   <div className="menu__link">
                      <Link to="/">Главная</Link>
                      <div className="menu__link-arrow">
                         <img src="icons/arrow.svg" className="header__icon" alt="icon"/>
                      </div>
                   </div>
                   <div className="menu__link">
                      <Link to="/">Автомобили</Link>
                      <div className="menu__link-arrow">
                         <img src="icons/arrow.svg" className="header__icon" alt="icon"/>
                      </div>
                   </div>
                   <div className="menu__link">
                      <Link to="/">Услуги</Link>
                      <div className="menu__link-arrow">
                         <img src="icons/arrow.svg" className="header__icon" alt="icon"/>
                      </div>
                   </div>
                   <div className="menu__link">
                      <Link to="/">Компания</Link>
                      <div className="menu__link-arrow">
                         <img src="icons/arrow.svg" className="header__icon" alt="icon"/>
                      </div>
                   </div>
                   <div className="menu__link">
                      <Link to="/">Контакты</Link>
                      <div className="menu__link-arrow">
                         <img src="icons/arrow.svg" className="header__icon" alt="icon"/>
                      </div>
                   </div>
                   <div className="menu__link">
                      <Link to="/">Вход</Link>
                   </div>
                   <div className="menu__link">
                      <Link to="/">Сравнения</Link>
                   </div>
                </div>
                <div className="menu__block">
                   <Link to="/" className="header__link">
                      <img src="icons/phone-white.svg" className="header__icon" alt="location"/> +99895 169 09 88</Link>

                   <Link to="/" className="header__link">
                      <img src="icons/email-white.svg" className="header__icon" alt="icon"/>
                      info@rauto.uz</Link>
                </div>
                <div className="menu__block menu__social">
                   <Link to="/" className="menu__social-icon">
                      <img src="icons/facebook.svg" className="header__icon" alt="icon"/>
                   </Link>
                   <Link to="/" className="menu__social-icon">
                      <img src="icons/instagram.svg" className="header__icon" alt="icon"/>
                   </Link>
                   <Link to="/" className="menu__social-icon">
                      <img src="icons/youtube.svg" className="header__icon" alt="icon"/>
                   </Link>
                </div>
                <div className="menu__block menu__block-location">
                   <img src="icons/marker-white.svg" className="header__icon" alt="location"/>
                   <address>г.Ташкент, ул.
                      Усмона Носира 113</address>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="header__main">
       <div className="container">
          <div className="header__logo">
             <img src="img/logo.png" alt="logo"/>
          </div>

          <nav className="header__nav nav">
             <Link to="/" className="header__nav-item">
                <span className="header__nav-icon"><span className="material-symbols-outlined">
                      store
                   </span></span>
                <span className="header__nav-link">
                   Главная</span>
             </Link>
             <Link to="/" className="header__nav-item">
                <span className="header__nav-icon"><span className="material-symbols-outlined">
                      directions_car
                   </span></span>
                <span className="header__nav-link">
                   Автомобили</span>
             </Link>
             <Link to="/" className="header__nav-item">
                <span className="header__nav-icon"><span className="material-symbols-outlined">
                      handshake
                   </span></span>
                <span className="header__nav-link">
                   Поуслуги</span>
             </Link>
             <Link to="/" className="header__nav-item">
                <span className="header__nav-icon"><span className="material-symbols-outlined">
                      info
                   </span></span>
                <span className="header__nav-link">
                   Компания</span>
             </Link>
             <Link to="/" className="header__nav-item">
                <span className="header__nav-icon"><span className="material-symbols-outlined">
                      phone_enabled
                   </span></span>
                <span className="header__nav-link">
                   Контакты</span>
             </Link>
             <Link to="/" className="header__nav-item">
                <span className="header__nav-icon"><span className="material-symbols-outlined">
                   person
                   </span></span>
                <span className="header__nav-link">
                   Вход</span>
             </Link>
          </nav>
       </div>
    </div>
 </div>
  )
}

export default Navbar