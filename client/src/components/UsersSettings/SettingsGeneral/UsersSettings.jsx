import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { allUsers } from "../../../Redux/actions/actionsUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModificarUser from "../ModificarUsers/ModificarUser";
import NuevoForm from "../New user admi/RegisterPage/RegisterPage";
import axios from "axios"

const UsersSettings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUsers());
  }, []);

  const users = useSelector((state) => state.users);

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (email) => {
    setShow(true);
    setEmail(email);
  };

  const borradoLogico =async (email,status) => {
  try {
    const dataFuncional = {email:email,active:!status}
    const result = await axios.delete("/users",{
      data:dataFuncional
    })
    if(result){
      alert("Operacion exitosa")
    }
 /*    loadingData() */
  } catch (error) {
    alert("hubo un error" + error.message)
  }
  };

  const [estado, setEstado] = useState(false);
  const handleModal = () => {
    estado ? setEstado(false) : setEstado(true);
  };

  return (
    <>
      <div className="container-fluid col-8">
        <br />
        <h3>User Settings</h3>
     
        <Button
          style={{ borderRadius: "2rem", fontSize: "15px" }}
          onClick={handleModal}
          variant="success"
        >
          New
        </Button>
        <Table striped size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>@Mail</th>
              <th>Modify</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((prod, index) => {
              return (
                <tr key={index}>
                  <td key={index}>{index + 1}</td>
                  <td>{prod?.firstname}</td>
                  <td>{prod?.email}</td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => handleShow(prod?.email)}
                    >
                      📝
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => borradoLogico(prod?.email,prod?.customerStatus)}
                    >
                      {prod.customerStatus ? "✅ " : "❌"}
                    </Button>
                  </td>
                </tr>
                //❎
              );
            })}
          </tbody>
          <ModificarUser show={show} handleClose={handleClose} email={email} />
        </Table>
        {estado ? <NuevoForm /> : null}
      </div>
    </>
  );
};

export default UsersSettings;
