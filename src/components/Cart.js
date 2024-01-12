import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from '../utils/cartSlice';

const Cart = () => {
    
    // This is efficient code
    const cartItems = useSelector((store) => store.cart.items);

    /* The below one is not efficient code because if we commonly declare store then any changes in the store it will affect other component which doesn't have that store */

    // const store = useSelector((store) => store);

    // const cartItems = store.cart.items;

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                { 
                    cartItems?.length !== 0 &&
                    <div className="text-right">
                        <button className="p-2 m-2 bg-slate-400 text-white rounded-lg" onClick={handleClearCart}>Clear</button>
                    </div>
                }
                {cartItems?.length === 0 && <h1> Cart is empty. Add Items to the cart</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;