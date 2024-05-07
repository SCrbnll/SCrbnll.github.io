import React, { useState } from 'react';
import logo from './../assets/Images/logo.webp'
import ToggleSwitch from './ToggleSwitch';

function NavBar() {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <header className='flex justify-between items-center py-5 lg:w-[1120px] mx-auto border-b-2 border-purple-200 w-full'>
            <img className="w-32 ml-6 lg:w-20 lg:ml-0" src={logo} alt='Logo' />

            <nav className='flex flex-row gap-x-10 opacity-80'>
                <a href='#top' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Inicio' : 'Home'}</a>
                <a href='#about' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Sobre mí' : 'About me'}</a>
                <a href='#experience' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Experiencia' : 'Experience'}</a>
                <a href='#projects' className="hover:text-purple-200 text-purple-400">{language === 'es' ? 'Proyectos' : 'Projects'}</a>
            </nav>
            <div className="lg:flex lg:mr-0 gap-x-7 mr-8">
                <button onClick={toggleLanguage}>
                    {language === 'es' ? 'English' : 'Español'}
                </button>
            </div>
        </header>
    );
};

export default NavBar;
