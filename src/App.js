import React from "react";
import "./App.css";

import Header from "./shared/components/Header/Header.component";
import Home from "./home/page/Home.component";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
