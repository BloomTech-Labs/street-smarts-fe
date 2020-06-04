import React from "react";

import Search from "../search";

import SearchStyled from "./styles";
import HomeResults from '../results/home-results';

const Home = () => {
  return (
    <SearchStyled>
      <div className="hero">
        <div className="heroText">
          <h1>What car will you drive next?</h1>
          <p>Compare cost, features and CO<sub>2</sub> emissions—all in oneplace.</p>
          <Search Results = {HomeResults} />
        </div>
      </div>
    </SearchStyled>
  );
};

export default Home;
