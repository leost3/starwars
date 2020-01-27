import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./shared/components/Header/Header.component";
import Home from "./home/page/Home.component";
import FilmDetails from "./FilmDetails/page/FilmDetails.component";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/film/:name/:id/:navigateto">
          <FilmDetails />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
