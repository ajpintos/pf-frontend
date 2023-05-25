import { SET_SHIPPING_OPTIONS } from "../types/typesDeliveries";


export const setShippingOption = (option, shippingOption) => {
    const shipping_option = shippingOption
    if (option === 'PickUp') {
        shipping_option = 0.00;
    } else if (option === 'HomeDeliveries') {
        shipping_option = 19.99;
    }
    return{
        type: SET_SHIPPING_OPTIONS,
        payload: shipping_option,
    }
};