import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating: Rating, cuisines, 
        costForTwo, sla} = resData?.info; //optional chaining

    /* In the Props given the default value for res and for cusine given alternative name */

    return(
        <div className="m-4 p-4 rounded-lg w-[300px] hover:scale-125 hover:m-30">
            <img alt="briyani" src={CDN_URL+cloudinaryImageId} loading="lazy" className="rounded-lg object-cover"></img>
                <h3 className="font-bold py-3 text-lg"> {name} </h3>
                <h4 className="break-words"> {cuisines.join(",")} </h4>
                <h4> {Rating} </h4>
                <h4> {costForTwo} </h4>
                <h4> {sla?.slaString} </h4>
        </div>
    )
}

export default RestaurantCard;