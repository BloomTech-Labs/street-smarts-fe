import React from "react";

import Search from "../search";

import HomeStyled from "./styles";
import HomeResults from '../home-results'

const Home = () => {
  return (
    <HomeStyled>
      <section className="hero">
        <h1>What car will you drive next?</h1>
        <p>Compare cost, features and CO<sub>2</sub> emissions—all in one place.</p>
        <Search />
      </section>
      <div className="home-results">
        <HomeResults />
      </div>
    </HomeStyled>
  );
};

export default Home;
