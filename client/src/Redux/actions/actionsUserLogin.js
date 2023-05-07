import axios from "axios";
import { LOGIN_USER , ALL_USERS } from "../types/loginUser.js";

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