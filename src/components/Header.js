import { useState, useContext } from "react";
import Swiggy from "../../images/swiggy.png";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Switcher from "./Switcher";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    const [toggle, setToggle] = useState(true);

    const {loggedInUser} = useContext(UserContext);

    //Subscring the store using the Selector
  const cartItems = useSelector((store) => store.cart.items);
  
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light'
      
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark'
      
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme')
    

    const onlineStatus = useOnlineStatus();

    const btnChange = () => {
        setToggle(!toggle)
    }

    return (
        <div className="flex justify-between shadow-lg bg-white
        dark:bg-gradient-to-l from-orange-300 h-16 size-full">
            <div className="logo-container">
              <img className="w-50" src={Swiggy} width={100} height={100} loading="lazy"></img>
              {/* <img className="w-50"  width={80} height={80} loading="lazy" src={LOGO_URL} /> */}
            </div>
            <div className="flex items-center">
                <ul className="flex gap-5 mx-4">
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🔴"  }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/grocery">Grocery</Link>
                    </li>
                    <li><Link to="/cart">🛒{cartItems?.length}  items</Link></li>
                    <li><button className="login" onClick={btnChange}>{toggle? 'Login' : 'Logout'}</button></li>
                    <li className="font-bold">{loggedInUser}</li>
                    <li><Switcher/></li>
                </ul>
            </div>
        </div>
    )
}