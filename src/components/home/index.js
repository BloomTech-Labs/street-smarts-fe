import React from "react";

import HomeSearch from "../search/home-search";

import HomeStyled from "./styles";

const Home = () => {
  return (
    <HomeStyled>
      <section className="hero">
        <h1>What car will you drive next?</h1>
        <p>Compare cost, features and CO<sub>2</sub> emissions—all in one place.</p>
        <div className="home-results">
          <HomeSearch />
        </div>
      </section>
    </HomeStyled>
  );
};

export default Home;
