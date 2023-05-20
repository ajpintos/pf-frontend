import { ADD_FAVORITES, DELETE_FAVORITES } from "../types/typesFavorites";

export const addFavorites = (favorites) => {
  return {
    type: ADD_FAVORITES,
    payload: favorites,
  };
};
export const deleteFavorites = (name) => {
  return {
    type: DELETE_FAVORITES,
    payload: name,
  };
};
