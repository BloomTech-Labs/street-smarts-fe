import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Dropdown from './components/search';
import Results from './components/results';

function App() {
  return (
    <div className="App">
      <Dropdown />
      <Route path = '/:make/:model' component = {Results} />
    </div>
  );
}

export default App;
