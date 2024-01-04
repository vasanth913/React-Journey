import {useState , useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

/* Don't use Index as a key because it will change the order, unique id as key is good to use*/

const Body = () => {

    //State Variable - Super Powerful Varibale

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        )

    const json = await data.json();

    //Optional Chaining

    setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }

    const topRatedRestaurant = () => {
        const updatedFilteredList = listOfRestaurants.filter((res) => {
            if(res.info.avgRating > 4.3){
                return listOfRestaurants
            }  
        })
        setListOfRestaurants(updatedFilteredList);
        setFilteredRestaurant(updatedFilteredList);
    }

    const clearRestaurant = () => {
        fetchData();
    }

    const searchRestaurant = () => {
       const filteredRestaurant = listOfRestaurants.filter((res) => {
           return (res.info.name).toLowerCase().includes(searchText.toLowerCase());
        })

        setFilteredRestaurant(filteredRestaurant);
    }

    // Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">  
        <div className="filter-search-btn-main">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={searchRestaurant}>Search</button>
            </div>
            <div className="clear-filter"> 
                    <button className="clear-filter-btn" onClick={clearRestaurant}>Clear Filter</button>
            </div>
            <div className="filter"> 
                <button className="filter-btn" onClick={topRatedRestaurant}>Top Rated Restaurant</button>
            </div>
          </div>
          <div className="res-container">
                {
                    filteredRestaurant.map((restaurant, index) => {
                        return (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;