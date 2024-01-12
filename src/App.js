import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import  {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

/** Optimizing our app even further and we can also call it as any of them as below:
 
   --> App Chunking
   --> Code Splitting
   --> Dynamic Bundling
   --> Lazy Loading
   --> On demand Loading
**/

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(()=>{
        //Make an authentication call
        const data = {
            name: 'Vasanth Ravi'
        };
        setUserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
         {/* User Provider has default value */}
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                {/* It has Vasanth Ravi in other components */}
                <div className="app">
                    {/* It has Vasanth Ravi ❤️ in header component */}
                    {/* <UserContext.Provider value={{loggedUser: 'Vasanth Ravi ❤️'}}> */}
                        <Header/>
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error />
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);