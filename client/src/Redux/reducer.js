import { FILTER_BY_CATEGORIES, GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME } from "./types/typesProducts";
import { ALL_USERS, LOGIN_USER , LOGIN_USER_GOOGLE , LOGOUT_USER , SET_USER } from "./types/typesUser.js";
import { DELETE_FAVORITES, ADD_FAVORITES } from "./types/typesFavorites";

const initialState = {
  users: [],
  userLogin: [],
  allProducts: [],
  products: [],
  showProducts: [],
  nameProducts: '',
  flagProducts: false,
  favorites: [],
  allCategories: [],
  categorieFilter: null
};

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
    case SET_USER:{
      return {
        ...state,
        userLogin: action.payload
      }
    }
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
