import { Component } from "react";
import Shimmer from "./Shimmer";

class UserClass extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 0,
            userInfo: {}
        }

        console.log('1st Child Constructor is called');
    }

   async componentDidMount() {
        console.log('3rd Child componentDidMount is called');

        this.timer = setInterval(()=>{
            console.log('set Interval is set');
        }, 1000)

        const data =  await fetch("https://api.github.com/users/vasanth913");

        const json = await data.json();

        this.setState({
            userInfo: 
            { 
                userName: json.name, 
                location: json.location, 
                company: json.company,
                avatarUrl: json.avatar_url

            }
        })
        
    }

    componentDidUpdate(prevProps,prevState){
        console.log('4th Component Did Update');
         // Example code below in unmounting phase
        // if(this.state.count === prevState.count){
        //     //code
        // }
    }

    componentWillUnmount(){
        //Unmounting the component
        console.log('Unmounting phase');
        clearInterval(this.timer); 
    }
    render() {
        console.log(' 2nd Child Render is called');
        //const {userName, location} = this.props;
        const { count, count2} = this.state;

        const { userName, location, company, avatarUrl} = this.state.userInfo;

        /* We can use debugger to verify the code how component works */
        
        //debugger;

        return !Object.keys(this.state.userInfo) ? (<Shimmer />) : (
            <div className="user-card">
                {/* <h2>Count: {count}</h2>
                <h2>Count2: {count2}</h2>
                <button onClick={() => {
                    //Never update State variables directly
                     this.setState({
                        count: count + 1,
                        count2: count2 + 1
                     })
                    }
                }>IncreaseCount</button> */}
                <div className="user-Card-Info">
                    <img src={avatarUrl} alt="Vasanth Ravi" loading="lazy" width="100px" height="100px"></img>
                    <span>
                        <h4>Name: {userName}</h4>
                        <h4>Location: {location}</h4>
                        <h4>Company: {company}</h4>
                    </span>
                </div>
            </div>
        );
    };
};

export default UserClass;

/**
 *  --- Constructor is called
 * 
 *  --- Render is called with dummy date or shimmer UI
 *      Html dummy date or shimmer ui display
 * 
 *  --- Component Did Mount is called
 *    Made an API call <API call>
 *    setState is called (State varibale is updated)
 *    reconciliation process of the update cycle
 * 
 *  --- Update is called
 *      render() with API Data
 *      Html is loaded with API data
 * 
 *  --- ComponentDidUpdate is called
 * 
 *  
 * 
 */