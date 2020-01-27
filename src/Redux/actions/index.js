import {
  FETCH_FILM_LIST_SUCCESS,
  FETCH_FILM_PENDING,
  FETCH_FILM_LIST_FAIL,
  SELECTED_FILM,
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_FAIL
} from "../types";
import starwars from "../../shared/apis/starwars.api";

export const fetchFilmsAction = () => async dispatch => {
  dispatch({
    type: FETCH_FILM_PENDING
  });
  try {
    const response = await starwars.get("/");
    dispatch({
      type: FETCH_FILM_LIST_SUCCESS,
      payload: response.data.results
    });
  } catch (error) {
    dispatch({
      type: FETCH_FILM_LIST_FAIL,
      payload: error
    });
  }
};

export const fetchCharacters = charactersApi => dispatch => {
  dispatch({ type: FETCH_FILM_PENDING, isPending: true });
  Promise.all(charactersApi)
    .then(apis => {
      const data = apis.map(api => api.data);
      dispatch({
        type: REQUEST_CHARACTERS_SUCCESS,
        payload: data
      });
    })
    .catch(error =>
      dispatch({
        type: REQUEST_CHARACTERS_FAIL,
        payload: error
      })
    );
};

export const selectedFilmAction = selectedFilm => ({
  type: SELECTED_FILM,
  payload: selectedFilm
});
