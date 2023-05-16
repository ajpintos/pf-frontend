import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { allUsers } from "../../../Redux/actions/actionsUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModificarUser from "../ModificarUsers/ModificarUser";

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

  const borradoLogico = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className="container-fluid col-8">
        <br />
        <h3>Configuraciones de Usuarios</h3>
        <br />
        <Table striped size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>@Correo</th>
              <th>Modify</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((prod, index) => {
              return (
                <tr key={index}>
                  <td key={index}>{index + 1}</td>
                  <td>{prod.firstname}</td>
                  <td>{prod.email}</td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => handleShow(prod.email)}
                    >
                      📝
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => borradoLogico(email)}
                    >
                      {/*   {prod.status? ' */}✅{/* ':'❌' */}
                    </Button>
                  </td>
                </tr>
                //❎
              );
            })}
          </tbody>
          <ModificarUser show={show} handleClose={handleClose} email={email} />
        </Table>
      </div>
    </>
  );
};

export default UsersSettings;
