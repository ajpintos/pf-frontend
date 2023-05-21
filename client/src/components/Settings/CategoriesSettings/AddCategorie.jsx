import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const AddCategorie = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      const result = await axios.post("/categories/categorie", form);
      if (result) alert("Operacion exitosa");
    } catch (error) {
      alert("DENEGADO" + error.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h3>Add Categorie</h3>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="name"
                onChange={handleChange}
                value={form.name}
                name="name"
                id="prueba"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                name="description"
                as="textarea"
                rows={5}
                placeholder="description"
                value={form.description}
                onChange={handleChange}
                id="pruebo"
              />
            </Form.Group>
            <br />
            <Button type="submit">add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddCategorie;
