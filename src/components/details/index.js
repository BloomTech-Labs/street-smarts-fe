import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card } from "antd";
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
      <div>
      <div>
        <h4>
          Your search: {car.id}
        </h4>
      </div>
        <Card
          id={car.id}
          className="carCard"
          title={`${car.year} ${car.make} ${car.model}`}>
          <p>
            <b>Fuel Type:</b> {car.fueltype1}
          </p>
          <p>
            <b>Transmission:</b> {car.trany}
          </p>
          <p>
            <b>Cyclinders:</b> {car.cylinders}
          </p>
          <p>
            <b>City MPG:</b> {car.city08}
          </p>
          <p>
            <b>Highway MPG:</b> {car.highway08}
          </p>
        </Card>
    </div>
    </>
  );
};

export default CarDetails;