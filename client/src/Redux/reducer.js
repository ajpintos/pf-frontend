import { FILTER_BY_CATEGORIES, GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME } from "./types/typesProducts";
import {ALL_USERS, LOGIN_USER} from "./types/loginUser.js";

const initialState = {
  users: [],
  allProducts: [],
  products: [],
  showProducts: [],
  nameProducts: '',
  flagProducts: false,
  userLogin: [],
  allCategories: [],
  categorieFilter: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        showProducts: action.payload,
        nameProducts: '',
        flagProducts: false,
      }
    case GET_PRODUCTSBYNAME:
      return {
        ...state,
        showProducts: action.payload.products,
        nameProducts: action.payload.name,
        flagProducts: true,
      }
    case GET_ALLCATEGORIES: 
      return {
        ...state,
        allCategories: action.payload,
      }
    case ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case LOGIN_USER:
      return {
        ...state,
        userLogin: action.payload
      }
    case FILTER_BY_CATEGORIES : {
      return {
        ...state,
        products: action.payload,
      }
    }
    default:
      return {...state};
  };
};

export default rootReducer;
