function ExperienceItem(props) {
    const { job, company, date, description } = props;
    

    return (
        <li class="mb-10 lg:ms-10 ms-14">            
            <span class=" absolute flex items-center justify-center lg:w-6 lg:h-6 w-8 h-8 bg-purple-900 rounded-full -start-3 ring-8 ring-gray-900 ">
                <svg class="lg:w-2.5 lg:h-2.5 w-3 h-3 text-purple-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 class="flex items-center text-wrap text-xl lg:w-full w-80 font-semibold text-orange-400 ">{job}</h3>
            <h3 class="flex items-center mb-1 text-xl lg:w-full w-80 font-semibold text-purple-400 "> {company}</h3>
            <time class="block mb-2 text-sm font-normal lg:w-full w-80 leading-none text-white-400 opacity-80 ">{date}</time>
            <p class="mb-4 text-sm lg:text-lg text-wrap font-normal lg:w-full w-96 text-gray-500 dark:text-gray-400">{description} </p>
        </li>
    )
}

export default ExperienceItem