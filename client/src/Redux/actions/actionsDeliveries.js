import { SET_SHIPPING_OPTIONS, SAVE_SHIPPING_DATA } from "../types/typesDeliveries";


export const setShippingOption = (order, shippingOption) => {
    return{
        type: SET_SHIPPING_OPTIONS,
        payload: shippingOption,
    }
};

export const saveShippingData = (datos) => {
    return function (dispatch){
        return dispatch({
            type: SAVE_SHIPPING_DATA,
            payload: datos,
        })
    }
}