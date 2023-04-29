import icons_tg from '../../assets/images/tg.png'
import icons_phone from '../../assets/images/phone.png'
import icons_wu from '../../assets/images/wu.png'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-wrapper">
                <nav className="footer__nav">
                    <div className="footer__about">
                        <h3 className='footer__nav-title'>О КОМПАНИИ</h3>
                        <a href='#'>Партнерская программа</a>
                        <a href='#'>Вакансии</a>
                    </div>
                    <div className="footer__menu">
                        <h3 className='footer__nav-title'>МЕНЮ</h3>
                        <div className='footer-menu-wrapper'>
                            <div className='footer__menu-left-block'>
                                <a href='#'>Расчёт стоимости</a>
                                <a href='#'>Услуги</a>
                                <a href='#'>Виджеты</a>
                                <a href='#'>Интеграции</a>
                                <a href='#'>Наши клиенты</a>
                            </div>
                            <div className='footer__menu-right-block'>
                                <a href='#'>Кейсы</a>
                                <a href='#'>Благодарственные письма</a>
                                <a href='#'>Сертификаты</a>
                                <a href='#'>Блог на Youtube</a>
                                <a href='#'>Вопрос / Ответ</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="footer__contacts">
                    <h3 className='footer__nav-title'>КОНТАКТЫ</h3>
                    <div className='footer__contacts-wrapper'>
                        <a href='tel:+75555555555'>+7 555 555 55 55</a>

                        <div className='footer__contacts-icons'>
                            <img src={icons_tg} alt="icons_tg" />
                            <img src={icons_phone} alt="icons_phone" />
                            <img src={icons_wu} alt="icons_wu" />
                        </div>

                        <h2>Москва, Путевой проезд 3c1, к 902</h2>
                    </div>
                </div>
            </div>

            <div className='footer__copyright'>
                <p>©WELBEX 2022. Все права защищены.</p>
                <p>Политика конфиденциальности</p>
            </div>

        </footer>
    )
}