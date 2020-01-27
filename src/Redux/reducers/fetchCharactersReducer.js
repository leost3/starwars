import {
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_FAIL
} from "../types";
const initialState = {
  isPending: true,
  characters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_CHARACTERS_SUCCESS:
      return { ...state, characters: action.payload,isPending: false };
    case REQUEST_CHARACTERS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
