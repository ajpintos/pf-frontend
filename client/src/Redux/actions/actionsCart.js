import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types/typesCart";


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

export const clearCart = () => {
    return dispatch({
        type: CLEAR_CART
    })
}