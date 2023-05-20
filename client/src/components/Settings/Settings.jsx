import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Stack from "react-bootstrap/esm/Stack";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import UsersSettings from "../UsersSettings/SettingsGeneral/UsersSettings";
import ProductsSettings from "../ProductsSettings/ProductsSettings";
import CategoresSettings from "../Settings/CategoriesSettings/CategoriesSettingGeneral";
import { useSelector } from "react-redux";

function Settings() {
  const [show, setShow] = useState({
    users: false,
    products: false,
    categories: false,
  });
  const handlerShowU = () => {
    setShow({ users: true, products: false });
  };
  const handlerShowP = () => {
    setShow({ users: false, products: true });
  };

  const handlerShowC = () => {
    setShow({ users: false, products: false, categories: true });
  };

  const user = useSelector((state) => state.userLogin);

  console.log(user);

  return (
    <div className="container-fluid">
      <Title />
      <Stack
        direction="horizontal"
        className="d-flex flex-row justify-content-between bg-success pt-3 pb-3"
      >
        <NavBar />
      </Stack>

      <div className="text-center mt-5 mb-5">
        {user.email ? (
          <div>
            <h4>administrator options</h4>
            <button onClick={handlerShowU} style={{ borderRadius: "2rem" }}>
              Users
            </button>
            <></> <></>
            <button onClick={handlerShowP} style={{ borderRadius: "2rem" }}>
              Products
            </button>
            <></> <></>
            <button onClick={handlerShowC} style={{ borderRadius: "2rem" }}>
              Categories
            </button>
            {show.users ? <UsersSettings /> : null}
            {show.products ? <ProductsSettings /> : null}
            {show.categories ? <CategoresSettings /> : null}
          </div>
        ) : (
          <h1>Setting Normales</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
