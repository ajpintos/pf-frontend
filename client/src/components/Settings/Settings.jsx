import React, { useState } from "react";
import UsersSettings from "../UsersSettings/SettingsGeneral/UsersSettings";
import ProductsSettings from "../ProductsSettings/ProductsSettings";

function Settings() {
  const [show, setShow] = useState({
    users: false,
    products: false,
  });
  const handlerShowU = () => {
    setShow({ users: true, products: false });
  };
  const handlerShowP = () => {
    setShow({ users: false, products: true });
  };
  return (
    <div className="container-fluid">

      <div className="text-center mt-5 mb-5">
        <h4>Opciones de administrador</h4>
        <button onClick={handlerShowU} style={{ borderRadius: "2rem" }}>
          Users
        </button>
        <></> <></>
        <button onClick={handlerShowP} style={{ borderRadius: "2rem" }}>
          Products
        </button>
        {show.users ? <UsersSettings /> : null}
        {show.products ? <ProductsSettings /> : null}
      </div>
    </div>
  );
}

export default Settings;
