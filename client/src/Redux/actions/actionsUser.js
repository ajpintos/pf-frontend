import axios from "axios";
import { LOGIN_USER , ALL_USERS, LOGIN_USER_GOOGLE, LOGOUT_USER } from "../types/typesUser.js";

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

export const userLoginGoogle = (infoUserGoogle) => {
    return async function (dispatch) {
        try{
            const userGoogle = {
                email : infoUserGoogle.email,
                firstname : infoUserGoogle.givenName,
                lastname : infoUserGoogle.familyName
            };

            const user = await axios.get(`/users/login/google?email=${userGoogle.email}&firstname=${userGoogle.firstname}&lastname=${userGoogle.lastname}`);

            return dispatch({
                type: LOGIN_USER_GOOGLE,
                payload: user.data
            });

        } catch (error) {
            return { error: error.message }
        }
    }
};

export const userLogout = () => {
    return {
        type: LOGOUT_USER,
        payload: {}
    }
}
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
};

