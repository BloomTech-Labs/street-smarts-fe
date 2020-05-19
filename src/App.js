import React from 'react';
import { ReactQueryDevtools } from "react-query-devtools";


import './App.css';
import Dropdown from './components/search';
console.log("ANYTHING")
function App() {
  return (
    <div className="App">
      <Dropdown />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
