import axios from "axios";
import { LOGIN_USER , ALL_USERS, LOGIN_USER_GOOGLE } from "../types/loginUser.js";

export const userLogin = ( email , password ) => {
    return async function (dispatch) {
        try {
            const user = await axios.get(`/users/login?email=${email}&password=${password}`);
            return dispatch({
                type: LOGIN_USER,
                payload: user.data
            });

        } catch (error) {
            return { error: error.message };
        }
    }
};

export const userLoginGoogle = (user) => {
    return {
        type: LOGIN_USER_GOOGLE,
        payload: user
    }
};

export const allUsers = () => {
    return async function (dispatch) {
        try {
            const allUserDB = await axios('/users');
            return dispatch({
                type: ALL_USERS,
                payload: allUserDB.data
            })
        } catch (error) {
            return { error: error.message };
        }
    }
}