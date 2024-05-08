import logo from './../assets/Images/logo.webp'

function NavBar() {
    return (
        <header className='fixed flex flex-col lg:flex-row justify-between items-center lg:py-5 py-5 lg:w-[1112px] lg:ml-32 border-b-2 border-purple-200 w-[440px] backdrop-blur-2xl z-20'>
            <img className="w-32 ml-6 lg:w-20 lg:ml-0 mb-4 lg:mb-0" src={logo} alt='Logo' />

            <nav className='flex flex-row lg:flex-row gap-x-10 lg:gap-x-6 lg:opacity-80'>
                <a href='#top' className="hover:text-purple-200 text-white mb-4 lg:mb-0">Inicio</a>
                <a href='#about' className="hover:text-purple-200 text-whitemb-4 lg:mb-0">Sobre mí</a>
                <a href='#experience' className="hover:text-purple-200 text-whitemb-4 lg:mb-0">Experiencia</a>
                <a href='#projects' className="hover:text-purple-200 text-white mb-4 lg:mb-0">Proyectos</a>
            </nav>
        </header>
    );
};

export default NavBar;
