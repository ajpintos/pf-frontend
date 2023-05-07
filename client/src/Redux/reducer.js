import { LOGIN_USER } from "./types/loginUser";
import { GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME } from "./types/typesProducts";

const initialState = {
  users: [],
  allProducts: [],
  showProducts: [],
  nameProducts: '',
  flagProducts: false,
  allCategories: [],
  user: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
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
    case LOGIN_USER:{
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return {...state};
  };
};

export default rootReducer;
