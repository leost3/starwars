import { FILM_LIST } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FILM_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
};
