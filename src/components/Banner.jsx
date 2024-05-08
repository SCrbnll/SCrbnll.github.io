import myself from './../assets/Images/myself.jpg'
import linkedinIcon from './../assets/Icons/linkedin.svg'
import githubIcon from './../assets/Icons/github.svg'
import mailIcon from './../assets/Icons/mail.svg'

import ButtonWithImage from './ButtonWithImage';

function Banner () {
    return (
        <section id='about'>
            <section className='flex flex-col items-center gap-y-3 lg:pt-28 pt-44 pb-28 ml-3 lg:ml-0'>
                <h1 className="text-3xl lg:text-4xl text-wrap font-bold tracking-tight text-purple-400 sm:text-5xl">
                    Samuel Carbonell Gonçalves
                </h1>
                <h2 className="text-2xl lg:text-3xl opacity-80 text-purple-200 font-bold pb-4 ">Full-Stack Developer</h2>
                <p className="text-base lg:text-xl text-wrap text-orange-100 px-1 text-center mt-4 lg:w-6/12 w-[400px]">
                    Siempre explorando nuevos paradigmas y tecnologías para implementar la solución idónea en el momento preciso.
                </p>

            </section>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:pl-28 lg:pt-12 lg:pb-28">
                <section className="lg:w-[870px] lg:px-4 py-30 md:w-[70%] w-[420px]">
                    <div className="rounded-lg bg-purple-100 lg:w-auto w-[420px] bg-opacity-50 border border-white p-4">
                        <h2 className="text-sm lg:text-xl text-wrap text-purple-100 p-4  w-auto">
                            ¡Hola! <b className='text-orange-200'>Soy Samuel Carbonell</b>, graduado recientemente en
                            <b className='text-orange-200'> Desarrollo de Aplicaciones Multiplataforma</b> y apasionado por la creación de software.
                            <br /><br />Durante mi formación, adquirí habilidades en Python y Java, centrándome en el
                            <b className='text-orange-200'> back-end</b>. Ahora estoy interesado en convertirme en un desarrollador
                            <b className='text-orange-200'> full-stack</b> para ofrecer soluciones más completas.
                            <br />Actualmente, estoy ampliando mis conocimientos en la creación de
                            <b className='text-orange-200'> aplicaciones móviles</b> y siempre busco nuevas oportunidades
                            para crecer profesionalmente y contribuir al éxito de cualquier equipo.
                        </h2>
                    </div>
                    <div className='flex flex-col lg:gap-x-8 lg:flex-row justify-center mt-8 lg:mt-12 gap-y-8 lg:w-auto w-[180px]'>
                        <ButtonWithImage imageUrl={linkedinIcon} title="LinkedIn" href="https://www.linkedin.com/in/samuu-crbnll" />
                        <ButtonWithImage imageUrl={githubIcon} title="GitHub" href="https://www.github.com/SCrbnll" />
                        <ButtonWithImage imageUrl={mailIcon} title="Mail" href="mailto:samuelcarbonell1203@gmail.com" />
                    </div>
                </section>
                <section className="lg:w-[40%] lg:ml-12 mb-12 lg:mb-20 lg:mt-0 mt-12">
                    <img
                        src={myself}
                        alt=""
                        className="w-[240px] md:w-56 lg:w-[320px] h-[240px] md:h-56 lg:h-[320px] rounded-full border-4 border-purple-400 mx-auto lg:mx-0"
                    />
                </section>
            </div>
        </section>
    );
};

export default Banner;
