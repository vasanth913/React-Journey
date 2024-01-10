import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) { return (<Shimmer/>) }

    const { name, cuisines, costForTwoMessage } =  resInfo?.cards[0]?.card?.card?.info;

    const itemCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   

    return (
        <div className="text-center dark:bg-gradient-to-l from-orange-300">
            <h1 className="font-bold py-6 text-2xl">{name}</h1>
            <p className="font-bold py-2 text-2xl">{cuisines.join(",")} - {costForTwoMessage}</p>
            {/* Categories Accordian */}
            {
                itemCategories.map((category, index)=>{
                    // Controlled Component
                    return (<RestaurantCategory isShowItem={showIndex === index ? true: false} handleClick={()=> setShowIndex(index)}key={category?.card?.card.title} data={category?.card?.card} />)
                })
            }
        </div>
    );
};

export default RestaurantMenu;