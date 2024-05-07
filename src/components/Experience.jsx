import ExperienceItem from './ExperienceItem';

function Experience () {
    const EXPERIENCE = [
        {
            date: 'Mar. 2024 - Jun. 2024',
            job: 'Junior Programmer & Data Analyst',
            company: 'Mercanza',
            description: 'Realicé mis prácticas en Mercanza como Programador Junior y Analista de Datos, lo que me brindó una valiosa oportunidad' + 
            ' para sumergirme en el mundo de la programación y el análisis de datos. Durante este período, adquirí experiencia práctica en el sector, ' + 
            'trabajando en proyectos reales y colaborando con profesionales del campo.'
        },
        {
            date: 'Jun. 2023 - Sept. 2023',
            job: 'Técnico de telecomunicaciones',
            company: 'Movimiento Televisivo S.A',
            description: 'Trabajé como técnico de telecomunicaciones en Castalla (Alicante) durante el verano. ' + 
            'Este primer trabajo me permitió adquirir una valiosa experiencia en el campo laboral y asumir nuevas responsabilidades, ' + 
            'como el mantenimiento y la instalación de equipos de telecomunicaciones'
        },
        {
            date: 'Mar. 2022 - Jun. 2022',
            job: 'Técnico de telecomunicaciones',
            company: 'Movimiento Televisivo S.A',
            description: 'Realizé mis prácticas como técnico de telecomunicaciones en una empresa de ' + 
            'Castalla (Alicante) con el objetivo de obtener conocimientos prácticos en el sector. Esta experiencia me brindó una invaluable ' + 
            'oportunidad para aprender y adquirir habilidades relevantes en el campo de las telecomunicaciones'
        },
        
    ]

    return (
        <div id='experience'>
            <div className="flex flex-col lg:pr-18 lg:pl-36 pr-44 pl-9 gap-y-4 pt-28 pb-28">
                <h2 className="text-3xl opacity-80 text-purple-200 font-bold pb-4 gap-x-10 ">Experiencia
                    <button className="ms-10 mt-1 text-sm px-4 h-6 mx-auto border border-orange-100 rounded-full text-black font-bold bg-purple-300 pointer-events-none">
                        Disponible para trabajar
                    </button>
                </h2>
                <section className="w-full md:w-[10%] px-4 py-30 lg:w-[740px]"> 
                    <ol class="relative border-s border-gray-200 dark:border-gray-700">  
                    {
                        EXPERIENCE.map((experience) => (
                            <ExperienceItem {...experience}/>
                        ))
                    }               
                    </ol>
                </section>
            </div>
        </div>
    );
};

export default Experience;
