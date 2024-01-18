import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating: Rating, cuisines, 
        costForTwo, sla} = resData?.info; //optional chaining

    /* In the Props given the default value for res and for cusine given alternative name */

    return(
        <div data-testid="resCard" className="m-4 p-4 rounded-lg w-[300px] hover:scale-125 hover:m-30">
            <img alt="briyani" src={CDN_URL+cloudinaryImageId} loading="lazy" className="rounded-lg object-cover"></img>
                <h3 className="font-bold py-3 text-lg"> {name} </h3>
                <h4 className="break-words"> {cuisines.join(",")} </h4>
                <h4> {Rating} </h4>
                <h4> {costForTwo} </h4>
                <h4> {sla?.slaString} </h4>
        </div>
    )
}

//Higher Order Component

//input  - Restaurant Card ==> RestaurantCardOpen

export const withOpenLabel = (RestaurantCard) => {

    return (props) => {
        return (
            <div className="relative">
                    <div className="absolute left-0 top-0 h-6 w-6">
                        <div
                        className="absolute transform -rotate-45 bg-green-600 text-center text-white font-semibold py-1 left-[15px] top-[14px] w-[60px] rounded-lg">
                            Open
                        </div>
                    </div>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;