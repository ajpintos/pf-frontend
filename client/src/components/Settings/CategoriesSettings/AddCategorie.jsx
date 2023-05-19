import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const AddCategorie = () => {
  return (
    
      <Modal  >
        <Modal.Header>Add Categorie</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control placeholder="name" />
            </Form.Group>
            <Form.Group>
              <Form.Control placeholder="description" />
            </Form.Group>
       
          </Form>
        </Modal.Body>
      </Modal>
    
  );
};
export default AddCategorie;
