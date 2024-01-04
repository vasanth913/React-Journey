import { useState } from "react";
import Burger from "../../images/smoking-burger.png";

export const Header = () => {
    const [toggle, setToggle] = useState(true)

    const btnChange = () => {
        setToggle(!toggle)
    }

    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src={Burger} width={100} height={100} loading="lazy"></img>
            </div>
            <div className="nav-items">
                <ul className="list-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={btnChange}>{toggle? 'Login' : 'Logout'}</button>
                </ul>
            </div>
        </div>
    )
}