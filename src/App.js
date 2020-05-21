import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import CarDetails from "./components/details";
import Dropdown from "./components/search";
import Results from "./components/results";

function App() {
  return (
    <div className="App">
      <Router>
        <Dropdown />
        <Route exact path="/:make/:model" component={Results} />
        <Route exact path="/details/:make/:model/:id" component={CarDetails} />
      </Router>
    </div>
  );
}

export default App;
