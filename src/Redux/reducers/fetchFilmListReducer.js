import { FILM_LIST } from "../types";
const initialState = {
  films: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILM_LIST:
      return { ...state, films: action.payload };
    default:
      return state;
  }
};
