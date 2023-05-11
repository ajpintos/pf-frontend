import Footer from "../../../Footer/Footer";
const PersonalInfo = () => {
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

          <div className="mt-3 text-end">otras configuraciones</div>
          <div>usuarios </div>
          <div>1 </div>
          <div>2</div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
