import {
  FETCH_FILM_LIST_SUCCESS,
  FETCH_FILM_PENDING,
  FETCH_FILM_LIST_FAIL
} from "../types";

const initialState = {
  isPending: true,
  films: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_PENDING:
      return { ...state, isPending: true };
    case FETCH_FILM_LIST_SUCCESS:
      return { ...state, films: action.payload, isPending: false };
    case FETCH_FILM_LIST_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
