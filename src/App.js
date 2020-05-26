import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import CarDetails from "./components/details";
import Dropdown from "./components/search";
import Results from "./components/results";

function App() {
  return (
    <Router>
      <div className="App">
        <Dropdown />
        <Route exact path="/:make/:model" component={Results} />
        <Route exact path="/:make/:model/:year" component={Results} />
        <Route exact path="/details/:make/:model/:id" component={CarDetails} />
      </div>
    </Router>
  );
}

export default App;
