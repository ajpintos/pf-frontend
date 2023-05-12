import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { allUsers } from "../../Redux/actions/actionsUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const UsersSettings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUsers());
  }, []);
  const users = useSelector((state) => state.users);

  return (
    <div className="container-fluid col-8">
      <br />
      <h3>Configuraciones de Usuarios</h3>
      <br />
      <Button variant="info" /* onClick={handleShowNew} */>New</Button>
      {/*  <Paginacion 
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        pageCurrent={pageCurrent}
        setPageCurrent={setPageCurrent}
        /> */}
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
          {
            users.map((prod, index) => {
              return (
                <tr>
                  <td key={index}>{index + 1}</td>
                  <td>{prod.firstname}</td>
                  <td>{prod.email}</td>
                  <td>
                    <Button variant="light" size="sm" /* onClick={showMod} */>
                      📝
                    </Button>{" "}
                  </td>
                  <td>
                    <Button variant="light" size="sm">
                      {/*   {prod.status? ' */}✅{/* ':'❌' */}
                    </Button>
                  </td>
                </tr>
                //❎
                //
              );
            }) /* .slice(indInicial,indFinal) */
          }
        </tbody>
      </Table>
    </div>
  );
};

export default UsersSettings;
