import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// Refactored this data fetching function into its own folder
import { fetchCarDetails } from '../../hooks/dataFetching';

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    fetchCarDetails(id)
      .then((res) => {
        console.log(`This is response for fetchCarDetails of ${res.data.year} ${res.data.make} ${res.data.model}`, res);
        setCar(res.data);
      })
      .catch((err) => {
        console.log("Error in fetchCarDetails useEffect", err.message);
      });
  }, [id]);
  return (
    <>
      <div>{car.make}</div>
    </>
  );
};

export default CarDetails;
