import React, { useState } from "react";
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

  return (
    <div className="container-fluid">

      <div className="text-center mt-5 mb-5">
        <div>
          <h1>Prueba</h1>
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
      </div>
    </div>
  );
}

export default Settings;
