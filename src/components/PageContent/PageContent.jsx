import redBall from '../../assets/red_ball.svg'
import purpleBall from '../../assets/purple_ball.svg'
import './PageContent.scss'

export const PageContent = () => {

  return (
    <>
      <div className="content-wrapper">
        <div className='shadow-red'></div>
        <div className='shadow-purple'></div>
        <div className='red-ball__first'>
          <img className='red-ball__first--picture' src={redBall} alt="" />
        </div>
        <div className='red-ball__second'>
          <img className='red-ball__second--picture' src={redBall} alt="" />
        </div>
        <div className='purple-ball__first'>
          <img className='purple-ball__first--picture' src={purpleBall} alt="" />
        </div>
        <div className="container">
          <div className='content'>
            <div className='content__column'>
              <div className='content__title'>
                Зарабатывайте больше <span className='content__title color'>с WELBEX</span>
              </div>
              <div className='content__desc'>
                Развиваем и контролируем продажи за вас
              </div>
            </div>
            <div className='content__column right'>
              <div className="features">
                <div className="features__wrapper">
                  <div className="features__title">
                    Вместе с <span className='features__title gradient'>бесплатной консультацией</span> мы дарим:
                  </div>
                </div>
                <ul className="features__list desktop">
                  <li className="features__item">
                    <div className="feature__title">
                      Виджеты
                    </div>
                    <div className="feature__desc">
                     30 готовых решений
                    </div>
                  </li>
                  <li className="features__item">
                    <div className="feature__title">
                      Dashboard
                    </div>
                    <div className="feature__desc">
                      с показателями вашего бизнеса
                    </div>
                  </li>
                  <li className="features__item">
                    <div className="feature__title">
                      Skype Аудит
                    </div>
                    <div className="feature__desc">
                     отдела продаж и CRM системы
                    </div>
                  </li>
                  <li className="features__item">
                    <div className="feature__title">
                      35 дней
                    </div>
                    <div className="feature__desc">
                     использования CRM
                    </div>
                  </li>
                </ul>
                <ul className="features__list mobile">
                  <li className="features__item left-col">
                    <div className='feature__icon'></div>
                    <div className='feature__title'>skype аудит</div>
                  </li>
                  <li className="features__item right-col">
                    <div className='feature__icon'></div>
                    <div className='feature__title'>30 виджетов</div>
                  </li>
                  <li className="features__item left-col">
                    <div className='feature__icon'></div>
                    <div className='feature__title'>Dashboard</div>
                  </li>
                  <li className="features__item right-col">
                    <div className='feature__icon'></div>
                    <div className='feature__title'>Месяц аmoCRM</div>
                  </li>
                </ul>
                <button className='features__button'>Получить консультацию</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
 )
}