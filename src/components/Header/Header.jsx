import logo_vector from '../../assets/images/logo__vector.png'
import logo_welbex from "../../assets/images/logo__welbex.png"
import icons_tg from '../../assets/images/tg.png'
import icons_phone from '../../assets/images/phone.png'
import icons_wu from '../../assets/images/wu.png'

export const Header = () => {
    return (
        <header className="header">
            <div className='header__wrapper'>
                <div className="header__logo">
                    <img src={logo_vector} alt="logo_vector" className='header__logo-vector' />
                    <img src={logo_welbex} alt="logo_welbex" className='header__logo-welbex' />
                </div>
                
                <nav className="header__nav">
                    <li><a href='#'>Услуги</a></li>
                    <li><a href='#'>Виджеты</a></li>
                    <li><a href='#'>Интеграция</a></li>
                    <li><a href='#'>Кейсы</a></li>
                    <li><a href='#'>Сертификаты</a></li>
                </nav>

                <div className="header__contacts">
                    <a href='tel:+75555555555'>+7 555 555 55 55</a>
                    <div className='header__contacts-icons'>
                        <img src={icons_tg} alt="icons_tg" />
                        <img src={icons_phone} alt="icons_phone" />
                        <img src={icons_wu} alt="icons_wu" />
                    </div>
                </div>
            </div>

            <p className='header__logo-description'> крупный интегратор CRM <br /> в Росcии и ещё 8 странах </p>

            <p className='header__first-ball' />
            <p className='header__second-ball' />
            <p className='header__third-ball' />
            
        </header>
    )
}