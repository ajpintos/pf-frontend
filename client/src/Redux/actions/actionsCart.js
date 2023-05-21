import { useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART, STATUS_CHANGE_ORDER, CLEAR_CART } from "../types/typesCart";


export const add_ToCart = (order) => {
    return {
        type: ADD_TO_CART,
        payload: order
    }
}

export const remove_FromCart = (idProduct, cartDetails) => {
    const products = cartDetails.filter(prod => prod.idProduct !== idProduct );
    console.log('products en remove ',products);
    let amountO= 0;
    let taxAmountO = 0;
    let totalAmountO = 0;
    for (let i=0; i < products.length; i++) {
        amountO = amountO + products[i].amount;
        taxAmountO = taxAmountO + products[i].taxAmount;
        totalAmountO = totalAmountO + products[i].totalAmount;
    };
    const order = {
        idOrder: '',
        amount: amountO,
        taxAmount: taxAmountO,
        totalAmount: totalAmountO,
    };
    return {
        type: REMOVE_FROM_CART,
        payload: { order, products }
    };
}

export const status_ChangeOrder = () => {
    return {
        type: STATUS_CHANGE_ORDER
    }
}

export const clear_Cart = () => {
    return {
        type: CLEAR_CART
    }
}