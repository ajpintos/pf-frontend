import React , {useEffect}from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { allUsers } from '../../Redux/actions/actionsUser.js';


const MyAccount = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.userLogin);
    const allUsersDB = useSelector(state => state.users);

    useEffect(() => {
        dispatch(allUsers());
    },[])

    return (
        <div>
            {console.log(allUsersDB)}
            <h1>My Account</h1>
            <h3>{`Welcome ${user.firstname}`}</h3>
        </div>
    );
};

export default MyAccount;