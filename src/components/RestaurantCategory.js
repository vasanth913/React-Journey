import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data, isShowItem,handleClick}) => {

    return (
        <div>
            {/*Header */}
            <div className=" dark:bg-gradient-to-l from-orange-300 w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg">
                <div className="flex cursor-pointer justify-between" onClick={handleClick} >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                    <span>🔽</span>
                </div>
                {/* Accordian Body */}
                {
                    isShowItem && <ItemList items={data.itemCards} />
                }
            </div>
            
        </div>
    )
}

export default RestaurantCategory;