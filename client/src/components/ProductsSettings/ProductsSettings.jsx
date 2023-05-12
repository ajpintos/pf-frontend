
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Paginacion from './Paginacion.jsx';
import {  useState } from 'react';
import Modal from 'react-bootstrap/Modal';


import { useSelector } from 'react-redux';


const ProductsSettings=()=>{
    const allProducts = useSelector(state => state.products)
   
   //pagination
    const itemsPerPage=10;
    const [pageCurrent,setPageCurrent]=useState(1);
    let totalItems=allProducts.length;
    let indInicial=(pageCurrent-1)*itemsPerPage;
    let indFinal= indInicial+itemsPerPage;
   
   //modal
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
    <div className='container-fluid col-8'>
        <h1>Products</h1>
        <Button  variant="success" onClick={handleShow}>New</Button>
        <Paginacion 
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
            />
       <Table striped size='sm'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Modify</th>
          <th>Status</th>
         
          
        </tr>
      </thead>
      <tbody>
       
            {  allProducts.map((prod,index)=>{
                return(
              <tr><td key={index}>{index+1}</td> 
             <td>{prod.name}</td>
               <td><Button variant='light' size="sm">📝</Button> </td>
               <td><Button variant='light' size="sm">{prod.status? '✅':'❌'}</Button></td>
              </tr>
                //❎
                // 
)
            }).slice(indInicial,indFinal)}
          
       
       
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default ProductsSettings;