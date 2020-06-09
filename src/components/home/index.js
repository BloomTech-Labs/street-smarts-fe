import React, { useEffect } from "react";

import HomeSearch from "../sections/search/home-search";

import HomeStyled from "./styles";
import setTitle from '../../hooks/setTitle';

const Home = () => {
  useEffect(() => setTitle(), []);

  return (
    <>
    <HomeStyled>
      <section className="hero">
        <div className='hero-text'>
        <h1>What car will you drive next?</h1>
        <p>Compare cost, features and CO<sub>2</sub> emissions—all in one place.</p>
        <div className="home-results">
          <HomeSearch />
        </div>
        </div>
      </section>
    </HomeStyled>
    </>
  );
};

export default Home;