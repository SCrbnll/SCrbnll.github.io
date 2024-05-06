import Technologies from "./Techonologies";

import angularIcon from "./../assets/Icons/angular.svg"
import htmlIcon from "./../assets/Icons/html.svg"
import cssIcon from "./../assets/Icons/css.svg"
import csharpIcon from "./../assets/Icons/csharp.svg"
import unityIcon from "./../assets/Icons/unity.svg"
import reactIcon from "./../assets/Icons/react.svg"
import expoIcon from "./../assets/Icons/expo.svg"
import typescriptIcon from "./../assets/Icons/typescript.svg"

function getColorForTechnology(tech) {
    switch (tech) {
      case "Angular":
        return "580000";
      case "HTML":
        return "a54c0b";
      case "CSS":
        return "00008B";
      case "C #":
        return "3A3A3A"
      case "Unity":
        return "00599C"
      case "React":
        return "20232A"
      case "Expo":
        return "5A5539"
      case "TypeScript":
        return "1d4876"
      default:
        return "000"; 
    }
}
  
  function getIconForTechnology(tech) {
    switch (tech) {
      case "Angular":
        return angularIcon;
      case "HTML":
        return htmlIcon;
      case "CSS":
        return cssIcon;
      case "C #":
        return csharpIcon;
      case "Unity":
        return unityIcon;
      case "React":
        return reactIcon;
      case "Expo":
        return expoIcon;
      case "TypeScript":
        return typescriptIcon;
      default:
        return null; 
    }
}


function ProjectsItem(props) {
    const { title, technologies, description, github, preview, img, isImageOnRight } = props;

    return (
        <div className="flex flex-col md:flex-row md:w-[1110px] pb-10">
            {isImageOnRight ? (
                <>
                    <div class=" bg-opacity-50 p-4 w-auto md:w-[900px] border-l-4 border-gray-500 pl-6">
                        <h3 class="flex items-center text-wrap text-4xl font-semibold text-orange-400 mb-4">{title}</h3>
                        <ul className="flex flex-row gap-x-2 mb-6">
                            {technologies.map((tech) => (
                                <Technologies name={tech} color={getColorForTechnology(tech)} img={getIconForTechnology(tech)} />
                            ))}
                        </ul>
                        <p class="mb-4 text-lg text-wrap font-normal text-gray-500 dark:text-gray-400">{description} </p>
                    </div>

                    <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl 
                    overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                        <div className="size-fit">
                            <img src={img} alt="Imagen" />
                        </div>
                    </div>  
                </>
            ) : (
                <>
                    <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl 
                    overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                        <div className="size-fit">
                            <img src={img} alt="Imagen" />
                        </div>
                    </div> 
                    <div class="bg-opacity-50 p-4 w-auto md:w-[900px] border-r-4 border-gray-500 pr-6">
                        <h3 class="text-right text-wrap text-4xl font-semibold text-orange-400 mb-4">{title}</h3>
                        <ul className="flex flex-row-reverse gap-x-2 mb-6">
                            {technologies.map((tech) => (
                                <Technologies name={tech} color={getColorForTechnology(tech)} img={getIconForTechnology(tech)} />
                            ))}
                        </ul>
                        <p class="mb-4 text-lg text-wrap font-normal text-gray-500 dark:text-gray-400 text-right">{description}</p>
                    </div>

                </>
            )}
        </div>
    );
    
    /*
    return (
        <li class="mb-10 ms-10">            
            <span class=" absolute flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full -start-3 ring-8 ring-gray-900 ">
                <svg class="w-2.5 h-2.5 text-purple-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 class="flex items-center text-wrap text-xl font-semibold text-orange-400 ">{job}</h3>
            <h3 class="flex items-center mb-1 text-xl font-semibold text-purple-400 "> {company}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white-400 opacity-80 ">{date}</time>
            <p class="mb-4 text-lg text-wrap font-normal text-gray-500 dark:text-gray-400">{description} </p>
        </li>
    )*/
}

export default ProjectsItem