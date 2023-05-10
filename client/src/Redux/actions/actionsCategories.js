import axios from "axios";
import { GET_ALLCATEGORIES, FILTER_BY_CATEGORIES } from "../types/typesCategories";

export const getCategories = async () => {
  try {
    const categories = await axios.get('/categories');
    return { type: GET_ALLCATEGORIES, payload: categories.data };
  } catch (error) {
    return { error: message.error };
  }
};

export const filterByCategories = async (category) => {
  try {
    const productsArray = await axios.get('/products?catgory='+category);
    if (productsArray.lenght < 1) throw Error('There are no products for this category');
    return {
        type: FILTER_BY_CATEGORIES,
        payload: productsArray,
    }
  } catch (error) {
    return { error: message.error };
  }
}
