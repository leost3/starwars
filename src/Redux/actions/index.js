import { FILM_LIST } from "./types";
import starwars from "../../shared/apis/starwars.api";

export const fetchFilmsAction = () => async dispatch => {
  const response = await starwars.get("/");
  console.log(response);

  dispatch({
    type: FILM_LIST,
    payload: response.data.results
  });
};
