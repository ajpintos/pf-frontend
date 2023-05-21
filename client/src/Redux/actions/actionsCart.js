import { ADD_TO_CART, REMOVE_FROM_CART, STATUS_CHANGE_ORDER, CLEAR_CART } from "../types/typesCart";


export const addToCart = () => {
    return dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}

export const removeFromCart = () => {
    return dispatch({
        type: REMOVE_FROM_CART,
        payload: product
    })
}

export const StatusChangeOrder = () => {
    return dispatch({
        type: STATUS_CHANGE_ORDER
    })
}

export const clearCart = () => {
    return dispatch({
        type: CLEAR_CART
    })
}