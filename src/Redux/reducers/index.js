import { combineReducers } from "redux";

import fetchFilmListReducer from "./fetchFilmListReducer";
import selectFilmReducer from "./selectFilmReducer";
import fetchCharactersReducer from "./fetchCharactersReducer";
export default combineReducers({
  films: fetchFilmListReducer,
  selectedFilm: selectFilmReducer,
  characters: fetchCharactersReducer
});
