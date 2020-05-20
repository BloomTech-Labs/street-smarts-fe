
import React, { useEffect } from "react";
import axios from 'axios';

import { useParams } from "react-router";

const Results = () => {
  const { make, model } = useParams();

  const fetchSelectedCarData = async () => {
    return await axios.get(
      `https://streetsmarts-labs24.herokuapp.com/api/cars/?make=${make}&model=${model}`
    );
  };

  useEffect(() => {
    fetchSelectedCarData()
      .then((res) => {
        console.log("This is response of selected car data", res);
      })
      .catch((err) => {
        console.log("Error in response of selected car data", err);
      });
  });

  return (
    <div>
      <p>{make}</p>
      <p>{model}</p>
    </div>
  );
};

export default Results;
