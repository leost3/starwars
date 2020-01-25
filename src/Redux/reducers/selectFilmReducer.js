import { SELECTED_FILM } from "../types";
const initialState = {
  selectedFilm: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_FILM:
      return { ...state, selectedFilm: action.payload };
    default:
      return state;
  }
};
