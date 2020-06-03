import React from "react";

import Search from "../search";

import SearchStyled from "./styles";

const Home = () => {
  return (
    <SearchStyled>
      <div className="hero">
        <div className="heroText">
          <h1>What car will you drive next?</h1>
          <p>Compare cost, features and CO<sub>2</sub> emissions—all in oneplace.</p>
          <Search />
        </div>
      </div>
    </SearchStyled>
  );
};

export default Home;
