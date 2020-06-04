import React from "react";
import Search from "../search";
import HomeStyled from "./styles";

const Home = () => {
  return (
    <>
    <HomeStyled>
      <section className="hero">
        <div className='hero-text'>
          <h1>What car will you drive next?</h1>
          <p>Compare cost, features and CO<sub>2</sub> emissions—all in one place.</p>
          <Search />
        </div>
      </section>
    </HomeStyled>
    </>
  );
};

export default Home;
