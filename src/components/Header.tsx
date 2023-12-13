import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { buttonStyle } from '../data/data';
import { useTranslation } from 'react-i18next';

const Toggle: React.FC<{ onClick?: () => void }> = ({ onClick = () => {} }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { i18n } = useTranslation();

  const toggle = () => {
    setIsToggled(!isToggled);
    onClick();
    i18n.changeLanguage(isToggled ? 'es' : 'en');
  };

  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" id="toggle" className="sr-only" onChange={toggle} checked={isToggled} />
        <div className=" bg-app-green w-32 h-11 rounded-full flex justify-between items-center px-3">
          <span className='text-black font-extrabold text-xl'>EN</span>
          <span className='text-black font-extrabold text-xl'>ES</span>
        </div>
        <div className={`dot absolute left-3 top-2 bg-app-primary w-7 h-7 rounded-full transition ${isToggled ? 'transform translate-x-20' : ''}`}>
        </div>
      </div>
    </label>
  );
};

const Header = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { t } = useTranslation();

  return (
    <header className="py-2 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className=''>
          <img src={Logo} alt="Logo" />
        </a>
        <div className="flex items-center space-x-5"> 
          <Toggle />
          <button className="font-rajdhani font-bold" style={buttonStyle} onClick={scrollToContact}>
            {t('header.contactMe')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
