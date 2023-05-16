import { FILTER_BY_CATEGORIES, GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME, SORT_PRODUCTS } from "./types/typesProducts";
import { ALL_USERS, LOGIN_USER , LOGIN_USER_GOOGLE , LOGOUT_USER } from "./types/typesUser.js";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types/typesCart";

const initialState = {
  users: [],
  userLogin: [],
  allProducts: [],
  products: [],
  showProducts: [],
  nameProducts: '',
  flagProducts: false,
  allCategories: [],
  categorieFilter: null,
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
        showProducts: action.payload,
        nameProducts: '',
        flagProducts: false,
      }
    };
    case GET_PRODUCTSBYNAME:{
      return {
        ...state,
        showProducts: action.payload.products,
        nameProducts: action.payload.name,
        flagProducts: true,
      }
    };
    case GET_ALLCATEGORIES: {
      return {
        ...state,
        allCategories: action.payload,
      }
    };
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
    case FILTER_BY_CATEGORIES : {
      const allCategories = state.products
      const CategoriesFiltered = action.payload === 'All'?
      state.allProducts : allCategories.filter(el => {
          return el.arrayCategories[0].name? el.arrayCategories[0].name.includes(action.payload) :
              el.allCategories?.map(el => el.name).includes(action.payload)
      })
          return {
              ...state,
              products: CategoriesFiltered
      }
    }
    case SORT_PRODUCTS: {
      let sortType = action.payload;
      if(sortType === 'AtoZ') {
        return {
          ...state,
          products: state.products.sort((a,b) => {
            if(a.name < b.name) return -1;
            if(b.name < a.name) return 1;
            return 0
          })
        }
      } else if (sortType === 'ZtoA') {
        return {
          ...state,
          products: state.products.sort((a,b) => {
            if(a.name > b.name) return -1;
            if(b.name > a.name) return 1;
            return 0;
          })
        }
      } else if (sortType === 'Lower') {
        return {
          ...state,
          products: state.products.sort((a,b) => {
            if(a.price < b.price) return -1;
            if(b.price < a.price) return 1;
            return 0
          })
        }
      } else if (sortType === 'Higher') {
        return {
          ...state,
          products: state.products.sort((a,b) => {
            if(a.price > b.price) return -1;
            if(b.price > a.price) return 1;
            return 0
          })
        }
      } else if(sortType === 'All Products') {
        return {
          ...state,
          products
        }
      }
      return {
        ...state,
        products: sortType,
      }
    }
    case ADD_TO_CART: {
      const {id} = action.payload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if(productInCartIndex >= 0) {
        const newState = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex], 
            quantity: state[productInCartIndex].quantity + 1
          },
          ...state.slice(productInCartIndex + 1)
        ]
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = [
          ...state,
          {
            ...action.payload,
            quantity: 1
          }
        ]
        updateLocalStorage(newState);
        return newState;
      }
    }
    case REMOVE_FROM_CART: {
      const { id } = action.payload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
    default:
      return {...state};
  };
};

export default rootReducer;
