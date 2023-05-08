import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

const addFavorites = (favorites) => {
  return {
    type: ADD_FAVORITES,
    payload: favorites,
  };
};
const deleteFavorites = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};

export { addFavorites, deleteFavorites };
