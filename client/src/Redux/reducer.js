import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

const initialState = {
  users: [],
  favorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };

    case DELETE_FAVORITES:
      return {
        favorites: state.favorites.filter((f) => f.id !== payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
