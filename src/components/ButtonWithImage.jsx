import arrowIcon from './../assets/Icons/arrow.svg'

const ButtonWithImage = ({ imageUrl, title, href }) => {
    return (
      <a href={href} className="inline-block" target="_blank">
        <div className="flex items-center justify-center bg-purple-400 hover:bg-purple-500 rounded-lg p-2">
          <img src={imageUrl} alt={title} className="size-7 mr-6" />
          <span className="text-black font-bold">{title}</span>
          <img src={arrowIcon} alt='Arrow' className="size-5 mr-1 ml-3" />
        </div>
      </a>
    );
  };
  
  export default ButtonWithImage;