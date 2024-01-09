import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [isOnlineStatus, setIsOnlineStatus] = useState(true)

    // check if online

    useEffect(()=>{

        window.addEventListener("offline", () => {
            setIsOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setIsOnlineStatus(true);
        })

    },[])

    // boolean value
    return isOnlineStatus;
}

export default useOnlineStatus;