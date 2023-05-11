import { useEffect, useState } from "react";
import { allUsers } from "../../../../Redux/actions/actionsUserLogin";
import { useDispatch } from "react-redux";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUsers());
  }, []);

  /*   const user = useState((state) => state.users); */
  console.log();

  return (
    <div className=" text-center  ">
      <div className="">
        <p className="mt-5">persona 1</p>
        <img src={"./img/1.png"} alt="" width={"100px"} height={"100px"} />
        <br />
        <p>John Doe</p>
        <p>john.doe@gmail.com</p>
        {/* <p>Phone: 555-555-5555</p> */}

        <div className=" container">
          <div style={{ border: "" }} className="row ">
            <div className="col   text-end">💳</div>
            <div className="col text-start">🚌</div>
          </div>
          <br />
          <div className=" ">
            <button
              style={{
                border: "2px solid blue",
                backgroundColor: "white",
                color: "black",
                borderRadius: "2rem",
              }}
            >
              Administra tu cuenta de google
            </button>
          </div>
          <br />
          <div className="mt-3 text-end">otras configuraciones</div>
          <br />
          <button style={{ borderRadius: "1rem" }}>
            Cambiar datos personales de la base de datos de Biofresh?
          </button>

          <div>cambiar First Name: ejemplo 1</div>
          <div>cambiar Last Name: ejeplo 2</div>
          <div>cambiar Address: 123121</div>
          <div>Zip Code: 123123</div>
          <div>Country: 12312</div>
          <div>Phone: 3431212</div>
          <div>City: prueba</div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
