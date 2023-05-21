import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ModProduct = ({ id, name, show, handleClose }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    price: "",
    stock: "",
    tax: "",
    categories: [],
  });

  form.id = id;

  //? CAPTURAR EL INPUT EN STATE LOCAL FORM
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //? ESTADO DE BOTON DE SUBMIT CONTROLADO CON USEEFFECT
  const [button, setButton] = useState(true);

  useEffect(() => {
    if (form.name.length > 0) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [form, setButton]);

  //? PARA ENVIAR LOS DATOS AL BACK
  const handleSubmit = async (event) => {
    try {
      const result = await axios.put("/products", form);
      if (result) {
        setForm({
          id: "",
          name: "",
          image: "",
          description: "",
          price: "",
          stock: "",
          tax: "",
          /*   status: true, */
        });
        alert("modiciado con exito en la base de datos");
      }
    } catch (error) {
      alert("error al modificar en base de datos");
    }
  };

  //! CATEGORIES

  let allCategories = useSelector((state) => state.allCategories);

  const [categories, setCategories] = useState(allCategories);

  const handleSelect = (event) => {
    console.log(event.target.value);
    setForm({
      ...form,
      categories: [...form.categories, event.target.value], //copia de lo que ya hay y lo que el usuario agrega en el select de temperamentos
    });
  };

  const handleDelete = (event) => {
    setForm({
      ...form,
      categories: form.categories.filter((temper) => temper !== event), // me deja solo los que no contengan a lo que el usuario da click
    });
  };

  //! HTML / JSX A RENDER
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <h3>product to modify {name}</h3>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              onChange={handleChange}
              name="name"
              value={form.name}
              placeholder="new name"
            ></Form.Control>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              onChange={handleChange}
              name="description"
              value={form.description}
              placeholder="new description"
            ></Form.Control>
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Control
              onChange={handleChange}
              name="image"
              value={form.image}
              placeholder="new image"
            ></Form.Control>
          </Form.Group>
          <br />

          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="price"
                  value={form.price}
                  placeholder="new price"
                ></Form.Control>
              </Form.Group>
            </Col>
            <br />
            <Col>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="stock"
                  value={form.stock}
                  placeholder="new stock"
                ></Form.Control>
              </Form.Group>
            </Col>
            <br />
            <Col>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  name="tax"
                  value={form.tax}
                  placeholder="new tax"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <br />

          <Form.Group>
            Categories
            <Form.Select
              name="categories"
              className="mb-3"
              onChange={handleSelect}
            >
              <option>Select Categories</option>
              {categories?.map((elem, index) => {
                return (
                  <option key={index} value={{ id: elem.id, name: elem.name }}>
                    {elem?.name}
                  </option>
                );
              })}
            </Form.Select>
            <div>
              {form.categories.map((ele) => {
                return (
                  <div key={ele?.value}>
                    <span style={{ color: "black" }}>{ele}</span>
                    <div onClick={() => handleDelete(ele)}>✕</div>
                  </div>
                );
              })}
            </div>
          </Form.Group>

          <br />
          {/* 
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button> */}

          <Button variant="primary" type="submit" disabled={button}>
            modify data
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModProduct;
