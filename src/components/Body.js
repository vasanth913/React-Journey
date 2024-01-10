import {useState , useEffect, useContext } from "react";
import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
/* Don't use Index as a key because it will change the order, unique id as key is good to use*/

const Body = () => {

    //State Variable - Super Powerful Varibale

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser, setUserName} = useContext(UserContext);

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    // const [debouncedInputValue, setDebouncedInputValue] = useState("");

    // If no dependency array ==> useEffect is called on every render
    // If dependency array is empty  = [] => useEffect is called on initial render just once
    // If dependency array is [btnNameReact] => called everytime btnNameReact is updated
    
    useEffect(() => {
        fetchData();
    },[])

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() =>{
            const filteredRestaurant = listOfRestaurants.filter((res) => {
                return (res.info.name).toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurant(filteredRestaurant);
        }, 1000);
        return () => clearTimeout(delayInputTimeoutId);
    },[searchText, 1000]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        )

    const json = await data.json();

    console.log('json ***', json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //Optional Chaining

    setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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

    const handleInput = (e) => {
        setUserName(e.target.value)
    }
    // const searchRestaurant = async () => {
    //    const filteredRestaurant = listOfRestaurants.filter((res) => {
    //        return (res.info.name).toLowerCase().includes(searchText.toLowerCase());
    //     })

    //     setFilteredRestaurant(filteredRestaurant);
    // }

    const searchData = (e) => {
        setSearchText(e.target.value);
      }

    if(onlineStatus === false){
        return (
            <h1>Looks like your are offline !!! Please check your internet connection</h1>
        )
    }

    // Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body dark:bg-gradient-to-l from-orange-300">  
        <div className="flex items-center justify-center gap-3">
            <div className="search p-4 m-4">
            <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input type="search" value={searchText}  onChange={(e)=> searchData(e)} name="q" className="py-2 text-sm text-white bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-96" placeholder="Search..." autoComplete="off" />
            </div>
                {/* <input type="text" className="border px-2 py-2 border-solid rounded-xl w-60" value={searchText} onChange={(e)=> searchData(e)}/> */}
                {/* <button className="search-btn" onClick={debounce(searchRestaurant, 3000)}>Search</button> */}
            </div>
            <div className="clear-filter"> 
                    <button className="bg-slate-600 text-white px-4 py-2 mx-2 rounded-xl" onClick={clearRestaurant}>Clear Filter</button>
            </div>
            <div className="filter"> 
                <button className="bg-green-400 px-4 py-2 mx-2 rounded-xl" onClick={topRatedRestaurant}>Top Rated Restaurant</button>
            </div>
            <div className="input"> 
              <label>UserName:</label>
              <input type="text" value={loggedInUser} onChange={(e)=>handleInput(e)} />
            </div>
          </div>
          <div className="flex flex-wrap gap-0.5 justify-center">
                {
                    filteredRestaurant.map((restaurant, index) => {
                        return (
                           <Link className="link" to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                            {/* If the restaurant is open then add a label to it */}
                            {
                                restaurant.info.isOpen ? <RestaurantCardOpen resData={restaurant} /> 
                                : <RestaurantCard resData={restaurant} />
                            }
                           </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;