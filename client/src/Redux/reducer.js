import { ALL_USERS, LOGIN_USER } from "./types/loginUser";
import { GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME } from "./types/typesProducts";
import { DELETE_FAVORITES, ADD_FAVORITES } from "./types/typesFavorites";

const initialState = {
  users: [],
  allProducts: [],
  showProducts: [],
  nameProducts: "",
  flagProducts: false,
  allCategories: [],
  userLogin: [],
  favorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        showProducts: action.payload,
        nameProducts: "",
        flagProducts: false,
      };
    case GET_PRODUCTSBYNAME:
      return {
        ...state,
        showProducts: action.payload.products,
        nameProducts: action.payload.name,
        flagProducts: true,
      };
    case GET_ALLCATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        userLogin: action.payload,
      };
    case ADD_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case DELETE_FAVORITES:
      return {
        favorites: state.favorites.filter((f) => f.id !== action.payload),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
