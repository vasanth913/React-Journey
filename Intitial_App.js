import React from "react";
import ReactDOM  from "react-dom/client";


//JSX - It's not Html inside javascript (It's a HTML like syntax)

//React Element

const heading = (<h1 className="h1" tabIndex={5}>This is Vasanth React Journey</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // Rendering React Element

//Two Types of Component

/* class based Component - Old
Functional Component - New */

// React Functional Component


const Title = () => {
    return (
    <h1> Title Component </h1>
    )
}

const elem = <span>React Elem</span>

const title1 = (
        <>
            {elem}
            <h1>React Element </h1>
        </> 
)

// Component Composition - A component inside component

/*
  <Title /> --> React Component
  {} --> Javascript Code
  <h1 /> --> Console statement
  <h2 /> --> React Element 
*/
const HeaderComponent = () => (
    <>
     <div>
        {/* We can also call a component like below */}
        {Title()}
        {/* <Title /> */}
        {
            400 + 100
            
        }
        <h1>{console.log('Render')}</h1>
        <span> React Functional Component </span>
        <span>{title1}</span> 
     </div>
    </>
)

root.render(<HeaderComponent />); // Rendering Functional component