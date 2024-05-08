import Technologies from "./Techonologies";
import ButtonProjectLink from "./ButtonProjectLink"

import angularIcon from "./../assets/Icons/angular.svg"
import htmlIcon from "./../assets/Icons/html.svg"
import cssIcon from "./../assets/Icons/css.svg"
import csharpIcon from "./../assets/Icons/csharp.svg"
import unityIcon from "./../assets/Icons/unity.svg"
import reactIcon from "./../assets/Icons/react.svg"
import expoIcon from "./../assets/Icons/expo.svg"
import typescriptIcon from "./../assets/Icons/typescript.svg"
import javascriptIcon from "./../assets/Icons/javascript.svg"
import tailwindcssIcon from "./../assets/Icons/tailwindcss.svg"
import githubIcon from './../assets/Icons/github.svg'
import linkIcon from './../assets/Icons/link.svg'

import comingsoon from "./../assets/Images/coming_soon.jpg"

function getColorForTechnology(tech) {
    switch (tech) {
      case "Angular":
        return "bg-[#580000]";
      case "HTML":
        return "bg-[#A54C0B]";
      case "CSS":
        return "bg-[#00008B]";
      case "C #":
        return "bg-[#3A3A3A]"
      case "Unity":
        return "bg-[#00599C]"
      case "React":
        return "bg-[#20232A]"
      case "Expo":
        return "bg-[#5A5539]"
      case "TypeScript":
        return "bg-[#1D4876]"
      case "JavaScript":
        return "bg-[#7b6f0f]"
      case "Tailwind CSS":
        return "bg-[#003159]"
      default:
        return "bg-[#000000]"
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
      case "JavaScript":
        return javascriptIcon;
      case "Tailwind CSS":
        return tailwindcssIcon;
      default:
        return null; 
    }
}


function ProjectsItem(props) {
    const { title, technologies, description, github, preview, img, isImageOnRight } = props;

    return (
        <div className="flex flex-col md:flex-row md:w-[1110px] w-[440px] pb-10 lg:pl-0 pl-12">
            {isImageOnRight ? (
                <>
                    <div class=" bg-opacity-50 p-4 lg:w-[900px] w-[300px] lg:ml-0 ml-5 border-l-4 border-gray-500">
                        <h3 class="flex items-center text-wrap lg:w-auto w-21 lg:text-3xl text-2xl font-semibold text-orange-400 mb-4">{title}</h3>
                        <ul className="flex lg:flex-row flex-col gap-x-2 mb-6 lg:gap-y-0 gap-y-1">
                            {technologies.map((tech) => (
                                <Technologies name={tech} color={getColorForTechnology(tech)} img={getIconForTechnology(tech)} />
                            ))}
                        </ul>
                        <p class="mb-4 lg:text-lg text-base text-wrap font-normal text-gray-500 dark:text-gray-400">{description} </p>
                        <div className='flex gap-x-6'>
                          {github && (
                            <ButtonProjectLink imageUrl={githubIcon} title="Repository" href={github} />
                          )}
                          {preview && (
                            <ButtonProjectLink imageUrl={linkIcon} title="Preview" href={preview} />
                          )}
                      </div>

                    </div>

                    <div className="flex flex-col items-center col-span-6 row-span-5 gap-8 ">
                        <div className="w-[270px] md:w-56 lg:w-[500px] h-[150px] md:h-56 lg:h-[310px] mr-10">
                            <img src={img ? img : comingsoon} alt="Imagen" />
                        </div>
                    </div>  
                </>
            ) : (
                <>
                    <div className="flex flex-col items-left col-span-6 row-span-5 gap-8">
                        <div className="w-[270px] md:w-56 lg:w-[500px] h-[150px] md:h-56 lg:h-[310px] ml-2">
                            <img src={img ? img : comingsoon} alt="Imagen" />
                        </div>
                    </div> 
                    <div class="bg-opacity-50 p-4 lg:w-[900px] w-[300px] border-r-4 border-gray-500">
                        <h3 class="text-right text-wrap lg:w-auto w-22 lg:text-3xl text-2xl font-semibold text-orange-400 mb-4">{title}</h3>
                        <ul className="flex lg:flex-row-reverse flex-col-reverse gap-x-2 mb-6 lg:gap-y-0 gap-y-1">
                            {technologies.map((tech) => (
                                <Technologies name={tech} color={getColorForTechnology(tech)} img={getIconForTechnology(tech)} />
                            ))}
                        </ul>
                        <p class="mb-4 lg:text-lg text-base text-wrap font-normal text-gray-500 dark:text-gray-400 text-right">{description}</p>
                        <div className='flex flex-row-reverse gap-x-6'>
                          {github && (
                            <ButtonProjectLink imageUrl={githubIcon} title="Repository" href={github} />
                          )}
                          {preview && (
                            <ButtonProjectLink imageUrl={linkIcon} title="Preview" href={preview} />
                          )}
                      </div>
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