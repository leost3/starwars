import { combineReducers } from "redux";

import fetchFilmListReducer from "./fetchFilmListReducer";

export default combineReducers({
  films: fetchFilmListReducer
});
