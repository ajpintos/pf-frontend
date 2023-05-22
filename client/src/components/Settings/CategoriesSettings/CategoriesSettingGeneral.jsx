import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Redux/actions/actionsCategories";
import { useEffect, useState } from "react";
import AddCategorie from "./AddCategorie";
import ModificarCategoria from "./ModificarCategories";

const CategoriesSettingGeneral = () => {
  const dispatch = useDispatch();
  const loadingData = async () => {
    const data = await getCategories()
     dispatch(data);
  };

  useEffect(() => {
    loadingData();
  },[]);

  const allCategories = useSelector((state) => state?.allCategories);

  //modal add categorie
  const [estado, setEstado] = useState(false);
  const handleModal = () => {
    estado ? setEstado(false) : setEstado(true);
  };

  const deleteCategorie = async (id, status) => {
    try {
      const dataFuncional = { id: id, active: !status };
      const result = await axios.delete("/categories", { data: dataFuncional });
      if (result) {
        alert("Operacion exitosa");
      }
      loadingData();
    } catch (error) {
      alert(`Error encontrado ${error.message}`);
    }
  };

  //modal modificar categorie
  const [pasamanos, setPasamanos] = useState({
    id: "",
    name: "",
  });
  const [modificar, setModificar] = useState(false);
  const handleModalDos = (id, name) => {
    setPasamanos({ id: id, name: name });
    if (modificar) {
      setModificar(false);
    } else {
      setModificar(true);
    }
  };

  return (
    <div>
      <br />
      <h3>category settings</h3>
      <div>
        <Button
          style={{ borderRadius: "2rem", fontSize: "15px" }}
          onClick={handleModal}
          variant="success"
        >
          New
        </Button>

        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Modify</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allCategories?.map((categorie, index) => {
              return (
                <tr key={index}>
                  <td key={index}>{index + 1}</td>
                  <td>{categorie?.name}</td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() =>
                        handleModalDos(categorie.id, categorie.name)
                      }
                    >
                      📝
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() =>
                        deleteCategorie(categorie?.id, categorie?.status)
                      }
                    >
                      {categorie.status ? "✅" : "❌"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {estado ? <AddCategorie /> : null}
        {modificar ? (
          <ModificarCategoria id={pasamanos.id} name={pasamanos.name} />
        ) : null}
      </div>
    </div>
  );
};
export default CategoriesSettingGeneral;
