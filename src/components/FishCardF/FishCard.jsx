const FishCard =({src, alt, name, title, region, info}) => {
    return (
        <div className="fish">
             <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{region}</p>
            <p>{name}</p>
            <p>{info}</p>
        </div>
    )
}

export default FishCard;