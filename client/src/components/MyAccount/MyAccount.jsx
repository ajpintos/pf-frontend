import PersonalInf from "./Components/PersonalInfo/PersonalInfo";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";
import NavBar from "../NavBar/NavBar";

function MyAccount() {
  return (
    <div className="  vw-100">
      <Title />
      <NavBar />
      <div className="">
        <PersonalInf />
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
