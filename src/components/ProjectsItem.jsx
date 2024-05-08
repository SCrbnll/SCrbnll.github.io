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
    const { title, technologies, description, github, preview, img } = props;

    return (
        <div className="flex flex-col md:flex-row md:w-[1110px] w-[440px] pb-10 lg:pl-0 pl-12"> 
          <>
            <div class=" bg-opacity-50 p-4 lg:w-[900px] w-[300px] lg:ml-0 ml-5 border-l-4 border-white">
              <h3 class="flex items-center text-wrap lg:w-auto w-21 lg:text-3xl text-2xl font-semibold text-orange-400 mb-4">{title}</h3>
              <ul className="flex lg:flex-row flex-col gap-x-2 mb-6 lg:gap-y-0 gap-y-1">
                {technologies.map((tech) => (
                  <Technologies name={tech} color={getColorForTechnology(tech)} img={getIconForTechnology(tech)} />
                ))}
              </ul>
              <p class="mb-4 lg:text-lg text-base text-wrap font-normal text-[#e3e3e3]">{description} </p>
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
              <div className="w-[270px] md:w-56 lg:w-[500px] h-[150px] md:h-56 lg:h-[310px] mr-10 lg:mr-0">
                  <img src={img ? img : comingsoon} alt="Imagen" />
                </div>
            </div>  
          </>
        </div>
    );
}

export default ProjectsItem