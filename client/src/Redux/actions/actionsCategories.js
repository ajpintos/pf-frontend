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

export function filterByCategories(payload){
  return {
      type: FILTER_BY_CATEGORIES,
      payload
  }
}
