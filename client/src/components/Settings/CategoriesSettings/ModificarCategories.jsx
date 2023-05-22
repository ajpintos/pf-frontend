import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import axios from "axios";

const ModificarCategories = ({ id, name }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
  });

  form.id = id;

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      const envio = await axios.put("/categories/modificacion", form);
      if (envio) alert("datos cambiados con exito ");
    } catch (error) {
      alert("error encontrado" + error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <h3>category to modify {name} </h3>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              onChange={onChange}
              name="name"
              value={form.name}
              placeholder="new name"
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              onChange={onChange}
              name="description"
              value={form.description}
              placeholder="new description"
              as="textarea"
              rows={4}
            />
          </Form.Group>
          <br />
          <Button type="submit">Modify</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModificarCategories;
