import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useParams } from "react-router";

const Results = () => {
  const { make, model } = useParams();

  const [results, setResults] = useState([]);

  const fetchSelectedCarData = async () => {
    return await axios.get(
      `https://streetsmarts-labs24.herokuapp.com/api/cars/?make=${make}&model=${model}`
    );
  };

  useEffect(() => {
    fetchSelectedCarData()
      .then((res) => {
        setResults(res.data)
        console.log("This is response of selected car data", res);
      })
      .catch((err) => {
        console.log("Error in response of selected car data", err);
      });
  }, [results]);


  const handleMoreDetails = () => {
      console.log('ok');
  }

  return (
    <div>
    <h4>Your search: {make} {model}</h4>
    <h1>Results:</h1>
    { results.map(car => {
        return (
            <div>
                <h2 onClick = {handleMoreDetails}> {car.year} {car.make} {car.model} </h2>

                <button>Compare</button>
            </div>
        )
    })}
    </div>
  );
};

export default Results;
