import useUserInfo from "../utils/useUserInfo";

const User = () => {

    // const[ count, setCount] = useState(0);
    // const[ count2, setCount2] = useState(0);

    const userInfo = useUserInfo();

    console.log('userInfo', userInfo);

    const { name, location, company, avatar_url} = userInfo;

    return (
        <div className="user-card">
            <div className="user-Card-Info">
                <img src={avatar_url} alt="Vasanth Ravi" loading="lazy" width="100px" height="100px"></img>
                <span>
                    <h4>Name: {name}</h4>
                    <h4>Location: {location}</h4>
                    <h4>Company: {company}</h4>
                </span>
            </div>
        </div>
    )
};

export default User;