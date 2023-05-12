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

export const userLoginGoogle = (user) => {
    return function (dispatch) {
        return dispatch({
            type: LOGIN_USER_GOOGLE,
            payload: {
                firstname: user.givenName,
                lastname: user.familyName,
                email : user.email
            }
        })
    }
};
// email: "santiagomuller45@gmail.com"
// ​
// familyName: "Muller"
// ​
// givenName: "Santiago"
// ​
// googleId: "115156884018693892604"
// ​
// imageUrl: "https://lh3.googleusercontent.com/a/AGNmyxb8IPSeJ_WwJykVuSED8r0UEgKpp0_trbQeE4VYCQ=s96-c"
// ​
// name: "Santiago Muller"

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

