import { Navbar, Container, Nav } from 'react-bootstrap';

import myself from './../assets/Images/myself.jpg'
import linkedinIcon from './../assets/Icons/linkedin.svg'
import githubIcon from './../assets/Icons/github.svg'
import mailIcon from './../assets/Icons/mail.svg'

import ButtonWithImage from './ButtonWithImage';

function Banner () {
    return (
        <main id='#about'>
            <section className='flex flex-col items-center gap-y-3 pt-28  pb-28'>
                <h1 className="text-4xl text-wrap font-bold tracking-tight text-purple-400 sm:text-5xl">
                    Samuel Carbonell Gonçalves
                </h1>
                <h2 className="text-3xl opacity-80 text-purple-200 font-bold pb-4 ">Full-Stack Developer</h2>
                <p className="text-xl text-wrap text-orange-100 px-1 text-center mt-4 w-6/12">
                    Siempre explorando nuevos paradigmas y tecnologías para implementar la solución idónea en el momento preciso.
                </p>

            </section>
            <div className="flex flex-row items-center pr-16 pl-32">
                <section className="w-full md:w-[10%] px-4 py-30 lg:w-[740px]">
                    <div className="rounded-lg bg-purple-100 bg-opacity-50 border border-white p-4 w-auto">
                        <h2 className="text-xl text-wrap text-purple-100 p-4 gap-y-4">
                        ¡Hola! <b className='text-purple-300'>Soy Samuel Carbonell </b>, graduado recientemente en 
                        <b className='text-purple-300'> Desarrollo de Aplicaciones Multiplataforma</b> y apasionado por la creación de software.
                        <br/><br/>Durante mi formación, adquirí habilidades en Python y Java, centrándome en el 
                        <b className='text-purple-300'> back-end </b>. Ahora estoy interesado en convertirme en un desarrollador 
                        <b className='text-purple-300'> full-stack</b> para ofrecer soluciones más completas.
                        <br/>Actualmente, estoy ampliando mis conocimientos en la creación de 
                        <b className='text-purple-300'> aplicaciones móviles</b> y siempre busco nuevas oportunidades 
                        para crecer profesionalmente 
                        y contribuir al éxito de cualquier equipo.
                        </h2>
                    </div>
                    <br />
                    <div className='flex gap-x-8 items-center justify-center'>
                        <ButtonWithImage imageUrl={linkedinIcon} title="LinkedIn" href="https://www.linkedin.com/in/samuu-crbnll" />
                        <ButtonWithImage imageUrl={githubIcon} title="GitHub" href="https://www.github.com/SCrbnll" />
                        <ButtonWithImage imageUrl={mailIcon} title="Mail" href="mailto:samuelcarbonell1203@gmail.com" />
                    </div>
                    
                </section>
                <section className="px-16 mb-16">
                    <img
                        src={myself}
                        alt=""
                        className="size-80 rounded-full border-4 border-purple-400 "
                    />
                </section>
                
            </div>
        </main>
    );
};

export default Banner;
