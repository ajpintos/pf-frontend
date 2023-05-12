import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import styles from "./ProductsSettings.module.css";

const ModProduct=()=>{

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
      });
    
      const [errors, setErrors] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
      });
        const [show, setShow] = useState(true);

        const handleClose = () => setShow(false);
        const [successMessage, setSuccessMessage] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const handleChange = (event) => {
            setForm({
              ...form,
              [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
            });
            setErrors(
              validate({
                ...form,
                [event.target.name]: event.target.value,
              })
            );
            setSuccessMessage("");
            setErrorMessage("");
          };
        // const handleShow = () => setShow(true);
        const submitNew= ()=>{console.log('new')}
        
        return (
          <>
            {/* <Button variant="primary" onClick={handleShow}>
              Launch static backdrop modal
            </Button> */}
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modify Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form onSubmit={submitNew} >
              <Form.Group className="my-1 pb-2">
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Name"
                  // className="mb-3"
                >
                  <Form.Control
                    className="form-control"
                    type="text"
                    name="name"
                    // value={form.name}
                    // onChange={handleChange}
                    aria-label="Name"
                    placeholder="Name"
                  />
                </FloatingLabel>
                <div>
                  <span className={styles.error}>
                    {errors.name ? errors.name : null}
                  </span>
                </div>
              </Form.Group>

              <div className="row ">
                <Form.Group className="col-md-6 col-xm-12 my-1 pb-2 ">
                  <FloatingLabel controlId="floatingInputEmail" label="Stock">
                    <Form.Control
                      type="text"
                      name="stock"
                      className="form-control  "
                      value={form.stock}
                      onChange={handleChange}
                      placeholder="Stock"
                    />
                  </FloatingLabel>
                  <div>
                    <span className={styles.error}>
                      {errors.stock ? errors.stock : null}
                    </span>
                  </div>
                </Form.Group>
                <Form.Group className="col-md-6 col-xm-12 my-1 pb-2">
                  <FloatingLabel
                    controlId="floatingInputPhone"
                    label="Price"
                  >
                    <Form.Control
                      type="text"
                      name="price"
                      className="form-control"
                      value={form.price}
                      maxLength="15"
                      onChange={handleChange}
                      placeholder="Price"
                      aria-label="price"
                    />
                  </FloatingLabel>
                  <div>
                    <span className={styles.error}>
                      {errors.price ? errors.price : null}
                    </span>
                  </div>
                </Form.Group>
              </div>
              <Form.Group className="my-1 pb-2 mb-3">
                {/* <Form.Label htmlFor="message">Mensaje</Form.Label>  */}
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Description"
                  className="mb-6"
                >
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    rows={5}
                    onChange={handleChange}
                    name="description"
                    value={form.description}
                    placeholder="Description"
                    height="200px"
                  />
                </FloatingLabel>
                <div className="row my-0">
                  <span className={styles.error}>
                    {errors.description ? errors.description : null}
                  </span>
                </div>
              </Form.Group>

              <Button variant="success" type="submit">
                Send
              </Button>

              <p className={styles.error}>{errorMessage}</p>
              <p className={styles.success}>{successMessage}</p>
            </Form>


              </Modal.Body>
              {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer> */}
            </Modal>
          </>
        );
  
   
}
export default ModProduct;