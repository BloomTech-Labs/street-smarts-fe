import React, { useState } from "react";

import Search from "../search";
import HomeResults from '../results/home-results';

import HomeStyled from "./styles";

const Home = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  return (
    <HomeStyled>
      <section className="hero">
        <h1>What car will you drive next?</h1>
        <p>
          Compare cost, features and CO<sub>2</sub> emissions—all in one place.
        </p>
        <div className="home-results">
          <Search
            make={make}
            setMake={setMake}
            model={model}
            setModel={setModel}
            year={year}
            setYear={setYear}
          />
        </div>
      </section>
      <HomeResults
        make={make}
        model={model}
        year={year}
      />
    </HomeStyled>
  );
};

export default Home;
