import * as types from "../types";

import selectedFilmReducer from "./selectFilmReducer";
import fetchFilmListReducer from "./fetchFilmListReducer";

describe("selectedFilmReducer", () => {
  const initialState = {};

  it("should return the intial state", () => {
    expect(selectedFilmReducer(undefined, {})).toEqual({ selectedFilm: {} });
  });

  it("should handle SELECTED_FILM", () => {
    expect(
      selectedFilmReducer(initialState, {
        type: types.SELECTED_FILM,
        payload: { id: 1, name: "darth" }
      })
    ).toEqual({
      selectedFilm: { id: 1, name: "darth" }
    });
  });
});

describe("fetchFilmListReducer", () => {
  const initialState = {
    isPending: true,
    films: []
  };

  it("should return the intial state", () => {
    expect(fetchFilmListReducer(undefined, {})).toEqual({
      isPending: true,
      films: []
    });
  });

  it("should handle SELECTED_FILM", () => {
    expect(
      fetchFilmListReducer(initialState, {
        type: types.FETCH_FILM_LIST_SUCCESS,
        payload: [
          { id: 1, name: "darth" },
          { id: 1, name: "darth" }
        ]
      })
    ).toEqual({
      isPending: false,
      films: [
        { id: 1, name: "darth" },
        { id: 1, name: "darth" }
      ]
    });
  });
});
