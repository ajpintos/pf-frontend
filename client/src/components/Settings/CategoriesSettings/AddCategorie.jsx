import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const AddCategorie = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [form, setForm] = useState({});

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h3>Add Categorie</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control placeholder="name" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="description" />
            </Form.Group>
            <br />
            <Button>add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddCategorie;
