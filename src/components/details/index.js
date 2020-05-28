import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Divider } from "antd";
import HorizontalGauge from 'react-horizontal-gauge';
import { fetchCarDetails, fetchPredictionCarbonEmissions } from '../../hooks/dataFetching';
import CarDetailsStyles from './styles';

const MAX_CARBON_EMISSIONS = 1400;

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});
  const [predictedCarbonEmissions, setPredictedCarbonEmissions] = useState(NaN);

  const gaugeTicks = []; // Empty for now

  useEffect(() => {
    fetchCarDetails(id, setCar)
    fetchPredictionCarbonEmissions(id, (obj) => {
      setPredictedCarbonEmissions(obj.predicted_carbon_emissions);
    });
  }, [id]);

  return (
    <CarDetailsStyles>
      <div className='carDetails'>
        <Card
          className='carText'
          id={car.id}>
          <h1>{`${car.make} ${car.model}`}</h1>
          <h3>{`${car.year}`}</h3>
          <Divider className='divider' />
            <h3>CLASS</h3>
            <p>{car.vclass}</p>
          <Divider className='divider' />
            <h3>TRANSMISSION</h3>
            <p> {car.trany}</p>
          <Divider className='divider' />
            <h3>DRIVE</h3>
            <p>{car.drive}</p>
          <Divider className='divider' />
            <h3>CYLINDERS</h3>
            <p>{car.cylinders}</p>
          <Divider className='divider' />
            <h3>FUEL</h3>
            <p>{car.fueltype1}</p>
          <Divider className='divider' />
            <h3>CITY MPG</h3>
            <p>{car.city08}</p>
          <Divider className='divider' />
            <h3>HIGHWAY MPG</h3>
            <p>{car.highway08}</p>
          <Divider />
        </Card>

        <Card
          className='carImg'
          id={car.id}
          cover={<img alt={`${car.year} ${car.make} ${car.model}`} src="https://live.staticflickr.com/7836/47492196641_8228341865_b.jpg" />}>
            <h3>CO<sub>2</sub> EMISSIONS</h3>
            <HorizontalGauge
              className='gauge'
              ticks={gaugeTicks} 
              min={0} max={MAX_CARBON_EMISSIONS}
              value={predictedCarbonEmissions}/>
            <h3>Cost of Ownership (5 years)</h3>
            <div>
              <h1>~ Put a thing here!! ~</h1>
              <h2>Yeah, right here.</h2>
            </div>
        </Card>
      </div>
    </CarDetailsStyles>
  );
};

export default CarDetails;