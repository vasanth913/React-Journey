import { useState, useEffect } from "react";
import Swiggy from "../../images/swiggy.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Switcher from "./Switcher";

export const Header = () => {
    const [toggle, setToggle] = useState(true);

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
                    <li>Cart</li>
                    <li><button className="login" onClick={btnChange}>{toggle? 'Login' : 'Logout'}</button></li>
                    <li><Switcher/></li>
                </ul>
            </div>
        </div>
    )
}