import ProjectsItem from './ProjectsItem';

function Projects () {
    const PROJECTS = [
        {
            title: 'RoadBeat',
            technologies: ['Expo', 'JavaScript', 'CSS'],
            description: 'Proximamente...',
        },
        {
            title: 'Porfolio',
            technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML'],
            description: 'Este mismo Porfolio que estás visualizando está desarrollado en React. Desarrollado desde cero como un proyecto ' + 
            'de aprendizaje, ofrece una experiencia intuitiva y atractiva para los visitantes. Muestra mi experiencia y proyectos de manera sencilla y eficiente',
            github: 'https://github.com/SCrbnll/SCrbnllDev/',
        },
        {
            title: 'Pokédex',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            description: 'Una Pokédex web para explorar y aprender sobre Pokémon. Desarrollada con Angular y conectada a la API gratuita de PokeApi. ' + 
            'Interfaz intuitiva para buscar, filtrar y descubrir información detallada sobre los Pokémon.',
            github: 'https://github.com/SCrbnll/Pokedex/',
            preview: 'https://scrbnll-pokedex.netlify.app/',
            img: 'https://raw.githubusercontent.com/SCrbnll/Pokedex/main/pokedex.png',
        },
        {
            title: 'Knight Fate',
            technologies: ['Unity', 'C #'],
            description: 'Knight Fate: un juego de aventuras Pixelart en Unity. Embárcate en la épica travesía de un caballero atrapado en una mazmorra.' + 
            ' Supera desafíos, resuelve enigmas y derrota enemigos para encontrar la salida y asegurar tu libertad. ¿Tienes lo necesario para forjar tu destino ' + 
            'como un verdadero héroe?',
            github: 'https://github.com/SCrbnll/KnightFate/',
            preview: 'https://youtu.be/rqjld6bgV-k',
            img: 'https://raw.githubusercontent.com/SCrbnll/KnightFate/main/knight_fate.png'
        },
        
    ]

    return (
        <div id='projects'>
            <div className="flex flex-col lg:pr-18 lg:pl-28 gap-y-4 pt-10 pb-10">
                <h2 className="lg:text-3xl text-2xl opacity-80 text-purple-200 font-bold pb-8 gap-x-10 lg:pl-0 pl-10">Mis Proyectos</h2>
                <section className="w-fit py-30 lg:w-[740px]">
                    {
                    PROJECTS.map((projects) => (
                        <ProjectsItem {...projects}  />
                    )) 
                    } 
                                 
                </section>
            </div>
        </div>
    );
};

export default Projects;
