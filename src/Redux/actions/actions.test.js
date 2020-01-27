import * as consts from "../types";
import * as actions from "./index";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("handles request films api ", () => {
  const store = mockStore();
  store.dispatch(actions.fetchFilmsAction());
  const action = store.getActions();
  const expectedAction = {
    type: consts.FETCH_FILM_PENDING
  };

  expect(action[0]).toEqual(expectedAction);
});
