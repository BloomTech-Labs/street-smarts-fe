import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import CarDetails from './components/details';
import Dropdown from './components/search';
import Results from './components/results';

function App() {
  return (
    <div className="App">
      <Dropdown />
      <Route exact path = '/:make/:model' component = {Results} />
      <Route exact path = '/details/:make/:model/:id' component = {CarDetails} />
    </div>
  );
};

export default App;
