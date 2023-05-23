import { FILTER_BY_CATEGORIES, GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME } from "./types/typesProducts";
import { ALL_USERS, LOGIN_USER , LOGIN_USER_GOOGLE , LOGOUT_USER, SET_USER } from "./types/typesUser.js";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, STATUS_CHANGE_ORDER } from "./types/typesCart";
import { DELETE_FAVORITES, ADD_FAVORITES } from "./types/typesFavorites";

const initialState = {
  users: [],
  userLogin: '',
  allProducts: [],
  products: [],
  showProducts: [],
  nameProducts: '',
  flagProducts: false,
  favorites: [],
  allCategories: [],
  categorieFilter: null,
  cart: '',
  cartDetails: [],
};

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPRODUCTS:{
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      }
    };
    case GET_PRODUCTSBYNAME:{
      return {
        ...state,
        showProducts: action.payload.products,
        nameProducts: action.payload.name,
        flagProducts: action.payload.flag,
      }
    };
    case GET_ALLCATEGORIES: {
      return {
        ...state,
        allCategories: action.payload,
      }
    };

    case FILTER_BY_CATEGORIES:
      return {
        ...state,
        products: action.payload,
      }
    case ALL_USERS:{
      return {
        ...state,
        users: action.payload
      }
    };
    case LOGIN_USER:{
      return {
        ...state,
        userLogin: action.payload
      }
    };
    case LOGIN_USER_GOOGLE: {
      return {
        ...state,
        userLogin: action.payload
      }
    };
    case LOGOUT_USER:{
      return {
        ...state,
        userLogin : action.payload
      }
    };
    case SET_USER:{
      return {
        ...state,
        userLogin: action.payload
      }
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: action.payload.order,
        cartDetails: [ ...state.cartDetails, action.payload.product ]
      }
    }
    case REMOVE_FROM_CART: {

      return {
        ...state,
        cart: {
          ...state.cart,
          amount: action.payload.order.amount,
          taxAmount: action.payload.order.taxAmount,
          totalAmount: action.payload.order.totalAmount,  
        },
        cartDetails: action.payload.products,
      }
    }
    case STATUS_CHANGE_ORDER:{

      return{
        ...state
      }
    }
    case CLEAR_CART: {
      // updateLocalStorage([])
      return {
        ...state,
        cart: '',
        cartDetails: [],
      }
    }
    // case ADD_TO_CART: {
    //   const {id} = action.payload
    //   const productInCartIndex = state.findIndex(item => item.id === id)
    //   if(productInCartIndex >= 0) {
    //     const newState = [
    //       ...state.slice(0, productInCartIndex),
    //       {
    //         ...state[productInCartIndex], 
    //         quantity: state[productInCartIndex].quantity + 1
    //       },
    //       ...state.slice(productInCartIndex + 1)
    //     ]
    //     updateLocalStorage(newState);
    //     return newState;
    //   } else {
    //     const newState = [
    //       ...state,
    //       {
    //         ...action.payload,
    //         quantity: 1
    //       }
    //     ]
    //     updateLocalStorage(newState);
    //     return newState;
    //   }
    // }
    // case REMOVE_FROM_CART: {
    //   const { id } = action.payload
    //   const newState = state.filter(item => item.id !== id)
    //   updateLocalStorage(newState)
    //   return newState
    // }
 
    case ADD_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((f) => f.name !== action.payload),
      };
    
    default:
      return {...state};
  };
};

export default rootReducer;