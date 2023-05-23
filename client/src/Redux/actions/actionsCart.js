import { ADD_TO_CART, REMOVE_FROM_CART, STATUS_CHANGE_ORDER, CLEAR_CART } from "../types/typesCart";


export const add_ToCart = (product, cartDetails) => {
    const cart_Details = cartDetails;
    let amountO= 0;
    let taxAmountO = 0;
    let totalAmountO = 0;
    for (let i=0; i < cart_Details.length; i++) {
        amountO = amountO + cart_Details[i].amount;
        taxAmountO = taxAmountO + cart_Details[i].taxAmount;
        totalAmountO = totalAmountO + cart_Details[i].totalAmount;
    };
    const order = {
        idOrder: product.idOrder,
        amount: amountO + product.amount,
        taxAmount: taxAmountO + product.taxAmount,
        totalAmount: totalAmountO + product.totalAmount,
    };
    return {
        type: ADD_TO_CART,
        payload: { order, product }
    }
}

export const remove_FromCart = (idProduct, cartDetails) => {
    const products = cartDetails.filter(prod => prod.idProduct !== idProduct );
    let amountO= 0;
    let taxAmountO = 0;
    let totalAmountO = 0;
    for (let i=0; i < products.length; i++) {
        amountO = amountO + products[i].amount;
        taxAmountO = taxAmountO + products[i].taxAmount;
        totalAmountO = totalAmountO + products[i].totalAmount;
    };
    const order = {
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