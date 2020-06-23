import React, { useEffect } from "react";
import Search from "../sections/search";
import HomeStyled from "./styles";
import setTitle from '../../hooks/setTitle';

const Home = () => {
  useEffect(() => setTitle(), []);

  const getUrlWithId = (id) => `/details/${id}`;

  return (
    <HomeStyled>
      <section className="hero">
        <div className='hero-text'>
          <h1>What car will you drive next?</h1>
          <p id = 'description'>Compare cost, features and CO<sub>2</sub> emissions—all in one place.</p>
          <div className="home-results">
            <Search getUrlWithId={getUrlWithId} />
          </div>
        </div>
      </section>
    </HomeStyled>
  );
};

export default Home;