import React , {useEffect , useState}from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { userLogin , allUsers } from '../../Redux/actions/actionsUserLogin';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imgpropia from "../../logo/logo.png";


const MyAccount = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch();
    const user = useSelector(state => state.userLogin);
    const allUsersDB = useSelector(state => state.users);

    useEffect(() => {
        dispatch(allUsers());
    },[])

    return (  <>
        <div className='container border col-12'>
            {/* {console.log(allUsersDB)} */}
            <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
        <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0' />
        </figure>
            <h1>My Account</h1>
            <h3>{`Welcome ${user.firstname}`}</h3>
            <h1>prueba</h1>
        </div>
       
         <Button variant="primary" onClick={handleShow}>
           Launch static backdrop modal
         </Button>
   
         <Modal
           show={show}
           onHide={handleClose}
           backdrop="static"
           keyboard={false}
         >
           <Modal.Header closeButton>
             <Modal.Title>Modal title</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             I will not close if you click outside me. Don't even try to press
             escape key.
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button variant="primary">Understood</Button>
           </Modal.Footer>
         </Modal>
       </>
    );
};

export default MyAccount;