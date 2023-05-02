import logo from '../../assets/logo.svg'
import telegram from '../../assets/telegram.svg'
import whatsApp from '../../assets/whatsapp.svg';
import viber from '../../assets/viber.svg'
import './Header.scss'

export const Header = () => {

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="row">
            <div className="logo">
              <img className="logo__picture" src={logo} alt="" />
            </div>
            <nav className="navigation desktop">
              <ul className="navigation__list">
                <li className="navigation__item">
                  Услуги
                </li>
                <li className="navigation__item">
                  Виджеты
                </li>
                <li className="navigation__item">
                  Интеграции
                </li>
                <li className="navigation__item">
                  Кейсы
                </li>
                <li className="navigation__item">
                  Сертификаты
                </li>
              </ul>
            </nav>
            <nav className="navigation mobile">
              <ul className="navigation__list">
                <li className="navigation__item">
                  Услуги
                </li>
                <li className="navigation__item">
                  Виджеты
                </li>
                <li className="navigation__item">
                  Интеграции
                </li>
                <li className="navigation__item">
                  Кейсы
                </li>
              </ul>
            </nav>
            <div className='contacts__header'>
              <a className='contacts__link' href="tel:+75555555555">
                +7 555 555-55-55
              </a>
            </div>
            <div className='messengers'>
              <ul className='messengers__list'>
                <li className='messengers__item'>
                  <img className='messengers__picture' src={telegram} alt="" />
                </li>
                <li className='messengers__item'>
                  <img className='messengers__picture' src={viber} alt="" />
                </li>
                <li className='messengers__item'>
                  <img className='messengers__picture' src={whatsApp} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className='row mobile'>
            <div className='header__description'>
              крупный интегратор CRM в России и ещё 8 странах
            </div>
          </div>
        </header>
      </div>
    </>
 )
}