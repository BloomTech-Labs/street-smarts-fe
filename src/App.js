import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import CarDetails from "./components/details";
import Dropdown from "./components/search";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Dropdown} />
        <Route exact path="/details/:make/:model/:id" component={CarDetails} />
      </div>
    </Router>
  );
}

export default App;
