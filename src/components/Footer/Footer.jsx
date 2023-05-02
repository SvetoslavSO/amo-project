import telegram from '../../assets/telegram.svg'
import whatsApp from '../../assets/whatsapp.svg';
import viber from '../../assets/viber.svg'
import './Footer.scss'

export const Footer = () => {

  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="footer__column about">
            <div className='footer__title'>
              О компании
            </div>
            <ul className='about__list'>
              <li className='about__item'>
                Партнёрская программа
              </li>
              <li className='about__item'>
                Вакансии
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <div className='footer__title'>
                меню
            </div>
            <ul className="menu__list">
              <ul className="menu__column">
                <li className="menu__item">
                  Расчёт стоимости
                </li>
                <li className="menu__item">
                  Услуги
                </li>
                <li className="menu__item">
                  Виджеты
                </li>
                <li className="menu__item">
                  Интеграции
                </li>
                <li className="menu__item">
                  Наши клиенты
                </li>
              </ul>
              <ul className="menu__column">
                <li className="menu__item">
                  Кейсы
                </li>
                <li className="menu__item">
                  Благодарственные письма
                </li>
                <li className="menu__item">
                  Сертификаты
                </li>
                <li className="menu__item">
                  Блог на Youtube
                </li>
                <li className="menu__item">
                  Вопрос / Ответ
                </li>
              </ul>
            </ul>
          </div>
          <div className="footer__column contacts">
            <div className="footer__title">
                Контакты
            </div>
            <div className='contacts__footer'>
              <div className="contacts__footer">
                <a className='contacts__link' href="tel:+75555555555">
                  +7 555 555-55-55
                </a>
              </div>
              <div className='messengers--footer'>
                <ul className='messengers__list--footer'>
                  <li className='messengers__item--footer'>
                    <img className='messengers__picture--footer' src={telegram} alt="" />
                  </li>
                  <li className='messengers__item--footer'>
                    <img className='messengers__picture--footer' src={viber} alt="" />
                  </li>
                  <li className='messengers__item--footer'>
                    <img className='messengers__picture--footer' src={whatsApp} alt="" />
                  </li>
                </ul>
              </div>
              <div className='contacts__adress'>
                Москва, Путевой проезд 3с1, к 902
              </div>
              <div className="privacy-window">
                <div className='rights-reserved'>©WELBEX 2022. Все права защищены.</div>
                <div className='privacy-policy'>Политика конфиденциальности</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
 )
}