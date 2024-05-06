import React, { useState } from 'react';
import logo from './../assets/Images/logo.webp'

function NavBar () {
    const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };


  return (
    <header id='#top' className='flex justify-between items-center py-5 w-[1120px] mx-auto border-b-2 border-purple-200'>
        <img style={{ width: 110, height: 30 }} src={logo} alt='Logo' />
        <nav className='flex flex-row gap-x-10 opacity-80'>
            <a href='#top' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Inicio' : 'Home'}</a>
            <a href='#about' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Sobre mí' : 'About me'}</a>
            <a href='#experience' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Experiencia' : 'Experience'}</a>
            <a href='#projects' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Proyectos' : 'Projects'}</a>
            <a href='#contact' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Contacto' : 'Contact'}</a>
        </nav>
        <div className="flex gap-x-7">
            <button onClick={toggleLanguage}>
            {language === 'es' ? 'English' : 'Español'}
            </button>
        </div>
    </header>

  );
};

export default NavBar;
