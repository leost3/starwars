import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchFilmListReducer from "./Redux/reducers/fetchFilmListReducer";
import thunk from "redux-thunk";

const store = createStore(fetchFilmListReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
