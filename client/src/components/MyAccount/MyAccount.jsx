import PersonalInf from "./Components/PersonalInfo/PersonalInfo";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";
import NavBar from "../NavBar/NavBar";
import {useEffect} from "react";

function MyAccount() {
    // useEffect(() => {
    //     dispatch(allUsers());
    // },[])
    return (
        <div>
            <h1>My Account</h1>
            {/*<h3>{`Welcome ${user.firstname}`}</h3>*/}
        </div>
    )
};

export default MyAccount;