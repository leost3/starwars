import { CHARACTERS } from "../types";
const initialState = {
  characters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};
