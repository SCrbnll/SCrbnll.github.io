const ButtonProjectLink = ({ imageUrl, title, href }) => {
    return (
      <a href={href} className="inline-block" target="_blank">
        <div className="lg:h-8 h-6 flex items-center justify-center bg-purple-400 hover:bg-purple-500 rounded-md p-2">
          <img src={imageUrl} alt={title} className="size-5 mr-4" />
          <span className=" text-sm text-black font-bold">{title}</span>
        </div>
      </a>
    );
  };
  
  export default ButtonProjectLink;