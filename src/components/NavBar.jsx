import React, { useState } from 'react';
import logo from './../assets/Images/logo.webp'
import ToggleSwitch from './ToggleSwitch';

function NavBar() {
    const [language, setLanguage] = useState('es');

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <header className='flex flex-col lg:flex-row justify-between items-center py-5 lg:w-[1120px] mx-auto border-b-2 border-purple-200 w-[400px]'>
            <img className="w-32 ml-6 lg:w-20 lg:ml-0 mb-4 lg:mb-0" src={logo} alt='Logo' />

            <nav className='flex flex-row lg:flex-row gap-x-10 lg:gap-x-6 lg:opacity-80'>
                <a href='#top' className="hover:text-purple-200 text-purple-400 mb-4 lg:mb-0">{language === 'es' ? 'Inicio' : 'Home'}</a>
                <a href='#about' className="hover:text-purple-200 text-purple-400 mb-4 lg:mb-0">{language === 'es' ? 'Sobre mí' : 'About me'}</a>
                <a href='#experience' className="hover:text-purple-200 text-purple-400 mb-4 lg:mb-0">{language === 'es' ? 'Experiencia' : 'Experience'}</a>
                <a href='#projects' className="hover:text-purple-200 text-purple-400 mb-4 lg:mb-0">{language === 'es' ? 'Proyectos' : 'Projects'}</a>
            </nav>
        </header>
    );
};

export default NavBar;
