import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const ModificarCategories = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [form, setForm] = useState({});
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <h3>category to modify </h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control placeholder="new name" />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              placeholder="new description"
              as="textarea"
              rows={4}
            />
          </Form.Group>
          <br />
          <Button>Modify</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModificarCategories;
