import axios from "axios";
import { LOGIN_USER } from "../types/loginUser.js";

export const userLogin = (email, password) => {
    return async function (dispatch) {
        try {
            const user = await axios('/users/login',{ email , password});
            return dispatch({
                type: LOGIN_USER,
                payload: user.data
            });
            
        } catch (error) {
            return { error: error.message };
        }
    }
};