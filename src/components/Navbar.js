import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link as Link } from 'react-router-dom';
import { Link as Link1} from 'react-scroll';
import { Button } from './Button';
import { useTranslation } from "react-i18next";



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [submenu,setSubMenu] = useState(0);

  const closeSubMenu = () => setSubMenu(0);  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    }
    else {
        setButton(true)
    }
};

function forClick(str) {
    closeMobileMenu();
    window.location.replace(str)
}


//neukazuje se sign up tlacitko pri refreshi
useEffect(() => {
    showButton();
    }, []);

window.addEventListener('resize', showButton);
const { t, i18n } = useTranslation('translation');
  return (
      
      <>
        <nav className="navbar">
            <div className="navbar-container">
                
                <Link to="/" className='navbar-logo anim' onClick={closeMobileMenu}>
                {t('navbar.logo')} <i className="fas fa-globe-americas"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item sub1 anim'>
                        <Link to='/' className='nav-links' onTouchEnd={() => setSubMenu(1)}>
                            {t('navbar.home')} <i class="fas fa-chevron-down"></i>
                        </Link>
                        <ul className={/*submenu == 1 && click == true ? "sub-menu1-active": */"sub-ul"}>
                            <li><Link1 to='ytvideo' onClick={() => window.location.pathname == "/" ?  closeMobileMenu() : forClick("/#ytvideo")} smooth={true} duration={1000}>{t('navbar.watch-trailer')}</Link1></li>
                            <li><Link1 to='cards-all' onClick={() => window.location.pathname == "/" ?  closeMobileMenu() : forClick("/#cards-all")} smooth={true} duration={1000}>{t('navbar.epic-dest')}</Link1></li>
                            <li><Link1 to='footer' onClick={() => window.location.pathname == "/" ?  closeMobileMenu() : forClick("/#footer")} smooth={true} duration={1000}>{t('navbar.social-media')}</Link1></li>
                            <li><Link1 to='gallery' onClick={() => forClick("/gallery")}>{t('navbar.gallery')}</Link1></li>
                        </ul>
                    </li>
                    <li className='nav-item anim'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        {t('navbar.services')}
                        </Link>
                    </li>
                    <li className='nav-item anim'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        {t('navbar.products')}
                        </Link>
                    </li>
                    <li className='nav-item anim'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        {t('navbar.contact')}
                        </Link>
                    </li>
                    <li className='nav-item anim'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        {t('navbar.sign-up')}
                        </Link>
                    </li>
                    
                </ul>
                <div className="anim">
                    {button && <Button lnk='/sign-up' className="anim" buttonStyle='btn--outline'>{t('navbar.sign-up')}</Button>}
                </div>
                <img src='/czech.png' className="czech flag anim" onClick={() => i18n.changeLanguage('cz')}></img>
                <img src='/english.png' className="english flag anim" onClick={() => i18n.changeLanguage('en')}></img>
            </div>
        </nav>
      </>
  );
}

export default Navbar;
