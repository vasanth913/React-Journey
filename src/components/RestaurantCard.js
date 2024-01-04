import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating: Rating, cuisines, 
        costForTwo, sla} = resData?.info; //optional chaining

    /* In the Props given the default value for res and for cusine given alternative name */

    return(
        <div className="res-card">
            <img alt="briyani" src={CDN_URL+cloudinaryImageId} loading="lazy" className="res-logo"></img>
            <div className="res-items">
                <h3> {name} </h3>
                <h4> {cuisines.join(",")} </h4>
                <h4> {Rating} </h4>
                <h4> {costForTwo} </h4>
                <h4> {sla?.slaString} </h4>
            </div>
        </div>
    )
}

export default RestaurantCard;