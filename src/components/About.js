import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);

        console.log('Parent Constructor');
    }

    componentDidMount() {
        console.log('Parent componentDidMount is called');
    }

    render(){
        
        console.log('Parent Render');

        return (
            <div>
                <h1>About</h1>
                <h2>This is About Section</h2>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h2>{loggedInUser}</h2> }
                </UserContext.Consumer>
              
                <User userName="Vasanth Ravi(function)"/>

                {/* <UserClass userName="Vasanth Ravi(class)" location="pondicherry(class)"/> */}

                {/* <UserClass userName="Monica Kumar(class)" location="Kanchipuram(class)"/>
                <UserClass userName="Shanvi(class)" location="KanchI and pondy(class)"/> */}
            </div>
        )
    }
}

/**
 * Parent Constructor
 * Parent Render
    -----Vasanth Ravi(class)Child Constructor
    -----Vasanth Ravi(class)Child Render

    -----Monica Kumar(class)Child Constructor
    -----Monica Kumar(class)Child Render

    ***DOM Manipulation happens after completing constructor and render*** - React is optimizing it by updating the DOM at last

    -----Vasanth Ravi(class)Child componentDidMount is called
    -----Monica Kumar(class)Child componentDidMount is called
    -----Parent componentDidMount is called
 * 
 */

export default About;