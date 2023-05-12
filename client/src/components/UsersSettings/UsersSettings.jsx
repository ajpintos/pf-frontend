const UsersSettings = () => {
  return (
    <div>
        <br />
        <br />
      <h1
        className="border border-success border-3"
        style={{ borderRadius: "1.5rem" }}
      >
        CONFIGURACIONES DE USUARIO
      </h1>
      <h2>DATOS</h2>
      <div className="container-fluid">
        <div className="row mt-2  ">
          <div className="col ">id</div>
          <div className="col">name</div>
          <div className="col">lastname</div>
          <div className="col">correo</div>
          <div className="col">Modificar</div>
          <div className="col">✅</div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row mt-2  ">
          <div className="col ">id</div>
          <div className="col">name</div>
          <div className="col">lastname</div>
          <div className="col">correo</div>
          <div className="col">Modificar</div>
          <div className="col">✅</div>
        </div>
      </div>
    </div>
  );
};

export default UsersSettings;
