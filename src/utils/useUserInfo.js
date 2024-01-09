import { useEffect, useState } from "react";

const useUserInfo = () => {

    const[ userInfo, setUserInfo] = useState({});

    const fetchData = async() => {
        const data =  await fetch("https://api.github.com/users/vasanth913");
        const json = await data.json();

        setUserInfo(json);
    };

    useEffect(() => {   
        fetchData();
        const timer = setInterval(()=>{
            console.log('Set Interval is called');
        },1000);

        return(()=> {
            console.log('unmounting phase clear Interval');
            clearInterval(timer);
        });
    },[]);

    return userInfo;
}

export default useUserInfo;