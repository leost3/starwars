import { FILM_LIST, SELECTED_FILM, CHARACTERS } from "../types";
import starwars from "../../shared/apis/starwars.api";

export const fetchFilmsAction = () => async dispatch => {
  const response = await starwars.get("/");
  dispatch({
    type: FILM_LIST,
    payload: response.data.results
  });
};
export const fetchCharacters = charactersApi => async dispatch => {
  Promise.all(charactersApi).then(apis => {
    const data = apis.map(api => api.data);
    dispatch({
      type: CHARACTERS,
      payload: data
    });
  });
};

export const selectedFilmAction = selectedFilm => ({
  type: SELECTED_FILM,
  payload: selectedFilm
});
