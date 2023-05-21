import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";

const ModificarUser = ({ show, handleClose, email }) => {
  const [form, setForm] = useState({
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    cd: "",
    city: "",
    country: "",
    phone: "",
    password: "",
  });

  form.email = email;

  const handleChange = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
    });
  };
  const [button, setButton] = useState(true);

  useEffect(() => {
    if (form.firstname.length > 0) setButton(false);
    else {
      setButton(true);
    }
  }, [form, setButton]);

  const handleSubmit = async (event) => {
    try {
      const result = await axios.put("/users", form);
      if (result.status === 201) {
        setForm({
          password: "",
          firstname: "",
          lastname: "",
          adress: "",
          cp: "",
          city: "",
          phone: "",
        });
        if (result) alert(result.data);
      }
    } catch (error) {
      alert("CUIDADO " + error.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>user to modify {email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    placeholder="new firstname"
                    name="firstname"
                    value={form.firstname}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    placeholder="new lastname"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                placeholder="new address"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                placeholder="new cd"
                name="cd"
                value={form.cd}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    placeholder="new city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    placeholder="new country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                placeholder="new phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email linked to account</Form.Label>
              <Form.Control name="email" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="new password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={button}>
              modify data
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModificarUser;
