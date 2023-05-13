
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Paginacion from './Paginacion.jsx';

import ModProduct from './ModProduct.jsx';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/actions/actionsProducts.js";
import { getCategories } from "../../Redux/actions/actionsCategories.js";
import NewProduct from './NewProduct.jsx';
import st from './ProductsSettings.module.css'


const ProductsSettings=()=>{
  const dispatch = useDispatch();
  const loadingData = async () => {
    const all_Products = await getProducts();
    dispatch(all_Products);
    const all_Categories = await getCategories();
    dispatch(all_Categories);
  };

 
  useEffect(() => {
        loadingData();
  }, []);
  
    const allProducts = useSelector(state => state.allProducts)
//    console.log(allProducts);
   //pagination
    const itemsPerPage=10;
    const [pageCurrent,setPageCurrent]=useState(1);
    let totalItems=allProducts.length;
    let indInicial=(pageCurrent-1)*itemsPerPage;
    let indFinal= indInicial+itemsPerPage;
   
   //modal
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// const submitNew= ()=>{console.log('new')}

///new
const [showNew, setShowNew] = useState(false);
const handleShowNew=()=>{
    setShowNew(true)
}
  const [showModif, setShowModif] = useState(false);
const showMod=()=>{
setShowModif(true)
}

    return(
        <>
    <div className='container-fluid col-8'>
        <h1>Products</h1>
        <Button  variant="success" onClick={handleShowNew}>New</Button>
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
              <tr key={index}><td >{index+1}</td> 
             <td>{prod.name}</td>
               <td><Button variant='light' size="sm" onClick={showMod}>📝</Button> </td>
               <td><Button variant='light' size="sm">{prod.status? '✅':'❌'}</Button></td>
              </tr>
                //❎
                // 
)
            }).slice(indInicial,indFinal)}
          
       
       
      </tbody>
    </Table>
    <div className={st.ppp}> <h6  >Total products: {totalItems} </h6></div>
   
    </div>
 
      {showModif?<ModProduct/>:''}
      {showNew?<NewProduct/>:''}
        </ > 
    )
}
export default ProductsSettings;