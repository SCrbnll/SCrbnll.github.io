import ProjectsItem from './ProjectsItem';

function Projects () {
    const PROJECTS = [
        {
            title: 'Pokédex',
            technologies: ['Angular', 'HTML', 'CSS'],
            description: 'Una Pokédex web para explorar y aprender sobre Pokémon. Desarrollada con Angular y conectada a la API gratuita de PokeApi. ' + 
            'Interfaz intuitiva para buscar, filtrar y descubrir información detallada sobre los Pokémon.',
            github: 'aaaa',
            preview: 'aaaa',
            isImageOnRight: true,
            img: 'https://raw.githubusercontent.com/SCrbnll/Pokedex/main/pokedex.png'
        },
        {
            title: 'Knight Fate',
            technologies: ['C #', 'Unity'],
            description: 'Knight Fate: un juego de aventuras Pixelart en Unity. Embárcate en la épica travesía de un caballero atrapado en una mazmorra.' + 
            'Supera desafíos, resuelve enigmas y derrota enemigos para encontrar la salida y asegurar tu libertad. ¿Tienes lo necesario para forjar tu destino ' + 
            'como un verdadero héroe?',
            github: 'aaaa',
            preview: 'aaaa',
            img: 'https://raw.githubusercontent.com/SCrbnll/KnightFate/main/knight_fate.png'
        },
        {
            title: 'RoadBeat',
            technologies: ['Expo', 'TypeScript', 'CSS'],
            description: 'Proximamente...',
            github: 'aaaa',
            preview: 'aaaa',
            isImageOnRight: true,
            img: 'https://raw.githubusercontent.com/SCrbnll/RoadBeat/main/roadbeat.png?token=GHSAT0AAAAAACRIDBAVDA36FXTCBEBKTGMYZRZLHBA'
        },
        
    ]

    return (
        <div id='projects'>
            <div className="flex flex-col pr-18 pl-36 gap-y-1">
                <h2 className="text-3xl opacity-80 text-purple-200 font-bold pb-8 gap-x-10 ">Mis Proyectos</h2>
                <section className="w-full md:w-[10%] py-30 lg:w-[740px]">
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
