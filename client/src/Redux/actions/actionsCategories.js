import axios from "axios";
import { GET_ALLCATEGORIES } from "../types/typesCategories";

export const getCategories = async () => {
  try {
    const categories = await axios.get('/categories');
    return { type: GET_ALLCATEGORIES, payload: categories.data };
  } catch (error) {
    return { error: message.error };
  }
};
