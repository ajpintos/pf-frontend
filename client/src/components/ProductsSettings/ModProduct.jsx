// import { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import styles from "./ProductsSettings.module.css";
// import validate from "./validate.js";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import st from "../ProductsSettings/Form.module.css";

// const ModProduct = ({ id, name }) => {
//   const [form, setForm] = useState({
//     id: "",
//     name: "",
//     description: "",
//     price: "",
//     stock: "",
//     image: "",
//     categories: [],
//   });

//   form.id = id;

//   const [errors, setErrors] = useState({
//     name: "",
//     description: "",
//     price: "",
//     stock: "",
//     image: "",
//     categories: [],
//   });

//   const allCategories = useSelector((state) => state?.allCategories);
//   const [categories, setCategories] = useState(allCategories);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [categoriesSel, setCategoriesSel] = useState([]);
//   const [show, setShow] = useState(true);
//   const loadingData = async (id) => {
//     /*   try {
//       const Data = await axios(`/products/${id}`);
//       const prod = Data.data;

//     } catch (error) {
//       window.alert(error.message);
//     } */
//   };

//   useEffect(() => {
//     loadingData(id);
//   }, [id]);
//   const handleClose = () => setShow(false);

//   const handleChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
//     });
//     /*  setErrors(
//       validate({
//         ...form,
//         [event.target.name]: event.target.value,
//       })
//     ); */
//     /*  setSuccessMessage("");
//     setErrorMessage(""); */
//   };

//   const handlerSelectCategory = (e) => {
//     let nomCategory = e.target.options[e.target.options.selectedIndex].text;
//     let id = e.target.value;
//     setForm({ ...form, categories: [...form.categories, id] });
//     setCategoriesSel([...categoriesSel, { id, name: nomCategory }]);
//     setCategories(allCategories.filter((ele) => ele.id !== id));
//     // console.log(form)
//   };
//   const deleteCategorie = (elem) => {
//     //
//     const { value, name } = elem;
//     // console.log(elem)
//     setCategoriesSel(categoriesSel.filter((ele) => ele.value !== value));
//     setForm({
//       ...form,
//       countries: form.countries.filter((ele) => ele !== value),
//     });
//     setCategories([...allCategories, { id: value, name }]);
//   };

//   // const handleShow = () => setShow(true);
//   const submitMod = async (event) => {
//     event.preventDefault();
//     event.preventDefault();
//     try {
//       const result = await axios.put("/products", form);
//       if (result) {
//         setForm({
//           password: "",
//           firstname: "",
//           lastname: "",
//           adress: "",
//           cp: "",
//           city: "",
//           phone: "",
//         });
//         alert(result.data);
//       }
//     } catch (error) {
//       alert("CUIDADO " + error.message);
//     }
//   };

//   return (
//     <>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>producto a modificar |{name}| </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={submitMod}>
//             <Form.Group className="my-1 pb-2">
//               <FloatingLabel
//                 controlId="floatingInputName"
//                 label="New name"
//                 // className="mb-3"
//               >
//                 <Form.Control
//                   className="form-control"
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   aria-label="Name"
//                   placeholder="Name"
//                 />
//               </FloatingLabel>
//               <div>
//                 <span className={styles.error}>
//                   {errors.name ? errors.name : null}
//                 </span>
//               </div>
//             </Form.Group>

//             <div className="row ">
//               <Form.Group className="col-md-6 col-xm-12 my-1 pb-2 ">
//                 <FloatingLabel controlId="floatingInputEmail" label="Stock">
//                   <Form.Control
//                     type="text"
//                     name="stock"
//                     className="form-control  "
//                     value={form.stock}
//                     onChange={handleChange}
//                     placeholder="Stock"
//                   />
//                 </FloatingLabel>
//                 <div>
//                   <span className={styles.error}>
//                     {errors.stock ? errors.stock : null}
//                   </span>
//                 </div>
//               </Form.Group>
//               <Form.Group className="col-md-6 col-xm-12 my-1 pb-2">
//                 <FloatingLabel controlId="floatingInputPhone" label="Price">
//                   <Form.Control
//                     type="text"
//                     name="price"
//                     className="form-control"
//                     value={form.price}
//                     maxLength="15"
//                     onChange={handleChange}
//                     placeholder="Price"
//                     aria-label="price"
//                   />
//                 </FloatingLabel>
//                 <div>
//                   <span className={styles.error}>
//                     {errors.price ? errors.price : null}
//                   </span>
//                 </div>
//               </Form.Group>
//             </div>
//             <Form.Group className="my-1 pb-2 mb-3">
//               {/* <Form.Label htmlFor="message">Mensaje</Form.Label>  */}
//               <FloatingLabel
//                 controlId="floatingTextarea"
//                 label="Description"
//                 className="mb-6"
//               >
//                 <Form.Control
//                   as="textarea"
//                   className="form-control"
//                   rows={5}
//                   onChange={handleChange}
//                   name="description"
//                   value={form.description}
//                   placeholder="Description"
//                   height="200px"
//                 />
//               </FloatingLabel>
//               <div className="row my-0">
//                 <span className={styles.error}>
//                   {errors.description ? errors.description : null}
//                 </span>
//               </div>
//             </Form.Group>
//             <Form.Group>
//               <FloatingLabel
//                 controlId="floatingInputName"
//                 label="Image"
//                 // className="mb-3"
//               >
//                 <Form.Control
//                   className="form-control"
//                   type="text"
//                   name="image"
//                   value={form.image}
//                   onChange={handleChange}
//                   aria-label="Image"
//                   placeholder="Image"
//                 />
//               </FloatingLabel>
//               <div>
//                 <span className={styles.error}>
//                   {errors.image ? errors.image : null}
//                 </span>
//               </div>
//             </Form.Group>
//             {/* ///////// */}
//             <Form.Group>
//               Categories
//               <Form.Select
//                 name="categories"
//                 className="mb-3"
//                 onChange={handlerSelectCategory}
//               >
//                 <option>Select Categories</option>
//                 {categories.map((elem, index) => {
//                   return (
//                     <option key={index} value={elem.id}>
//                       {elem.name}
//                     </option>
//                   );
//                 })}
//               </Form.Select>
//               <div className={st.seleccionados}>
//                 {categoriesSel.length > 0 ? (
//                   categoriesSel.map((ele) => {
//                     return (
//                       <div key={ele.value} className={st.cont2B}>
//                         <span>{ele.name}</span>
//                         <div
//                           className={st.equis}
//                           onClick={() => deleteCategorie(ele)}
//                         >
//                           ✕
//                         </div>
//                       </div>
//                     );
//                   })
//                 ) : (
//                   <p className={st.spErr}> Select the categories</p>
//                 )}
//               </div>
//             </Form.Group>

//             <Button variant="success" type="submit">
//               Send
//             </Button>

//             <p className={styles.error}>{errorMessage}</p>
//             <p className={styles.success}>{successMessage}</p>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };
// export default ModProduct;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";

const ModProduct = ({ id, name, show, handleClose }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    price: "",
    stock: "",
    tax: "",
    status: true,
  });

  form.id = id;

  console.log(form);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const [button, setButton] = useState(true);

  useEffect(() => {
    if (form.name.length > 0) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [form, setButton]);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
          status: true,
        });
        alert("modiciado con exito en la base de datos");
      }
    } catch (error) {
      alert("error al modificar en base de datos");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>Producto a modificar |{name}|</Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>new name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              value={form.name}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>new description</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="description"
              value={form.description}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>new image</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="image"
              value={form.image}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>new price</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="price"
              value={form.price}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>new stock</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="stock"
              value={form.stock}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>new tax</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="tax"
              value={form.tax}
            ></Form.Control>
          </Form.Group>

          <br />

          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>

          <Button variant="primary" type="submit" disabled={button}>
            Cambiar datos
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModProduct;
