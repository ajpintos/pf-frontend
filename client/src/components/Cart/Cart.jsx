import { addToCart, removeFromCart, clearCart } from "../../Redux/actions/actionsCart";
import s from './Cart.module.css'
import  { ClearCartIcon, RemoveFromCartIcon} from '../Icons/Icons.jsx'
import { useId, useState } from "react";

export default function Cart(){

    return (
        <div>
            <label className={s.cart_button}>🛒 Cart</label>
            <input type='checkbox' hidden />
        </div>
    )
}