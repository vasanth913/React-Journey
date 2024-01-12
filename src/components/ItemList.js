import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items && items.map((item) => {
                    return(
                        <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex">
                            <div className="py-2 flex-1">
                                <div>
                                    {item.card.info.name} 
                                </div>
                                <div>
                                    ₹{(item.card.info.price)/100}
                                </div>
                                <span className="text-ellipsis overflow-hidden text-wrap text-xs text-gray-600">{item.card.info.description}</span>
                            </div>
                            <div className="relative w-[200px] h-[200px]">
                              <img alt="image" src={CDN_URL + item.card.info.imageId} loading="lazy"></img>
                              <button className="absolute shadow-lg bottom-3 left-10 w-28 h-12 mb-10 z-2 rounded-lg bg-white text-green-500 text-center font-bold" onClick={()=> handleAddItem(item)}>ADD<span className="font-bold text-lg px-1 text-center my-1">&#43;</span> </button>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;