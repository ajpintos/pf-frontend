import { FILTER_BY_CATEGORIES, GET_ALLCATEGORIES } from "./types/typesCategories";
import { GET_ALLPRODUCTS, GET_PRODUCTSBYNAME, SORT_PRODUCTS } from "./types/typesProducts";
import { ALL_USERS, LOGIN_USER , LOGIN_USER_GOOGLE } from "./types/typesUser.js";

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
    case LOGIN_USER_GOOGLE: {
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
    default:
      return {...state};
  };
};

export default rootReducer;
