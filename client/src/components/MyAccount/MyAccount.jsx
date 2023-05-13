import PersonalInfo from "./Components/PersonalInfo/PersonalInfo.jsx";
import Footer from "../Footer/Footer.jsx";
import Title from "../Title/Title.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import { useSelector } from "react-redux";

function MyAccount() {

    const user = useSelector(state => state.userLogin)

    return (
        <div>
            <Title/>
            <NavBar/>
            <h1>My Account</h1>
            <h3>{`Welcome ${user.firstname}`}</h3>
            <Footer/>
        </div>
    )
};

export default MyAccount;