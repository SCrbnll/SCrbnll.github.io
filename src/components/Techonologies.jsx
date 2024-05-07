function Technologies(props){
    const { name, img, color } = props;

    return (
      <div className={`flex gap-x-2 rounded-full text-xs text-white py-1 px-2 ${color} `}>
          <img src={img} className="size-4 " />
          {name}
        </div>
    )
}

export default Technologies