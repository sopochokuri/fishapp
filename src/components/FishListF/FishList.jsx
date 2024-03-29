import FishCard from "../FishCardF/FishCard";
import  "../FishListF/FishList.css";

const FishList = ({fishes}) => {
    console.log('Hi');

    return <div className="fish-list"> 
      {fishes.map((fish)=>{
                return(
                    <FishCard 
                        key={fish.name}
                        src={fish.illustrationPhoto.src} 
                        alt={fish.illustrationPhoto.alt} 
                        title={fish.scientificName}
                        region={fish.region}
                        name={fish.name}
                        info={fish.info}
                    />
                )
            })}
    </div>;
}

export default FishList;