import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Divider } from "antd";
import HorizontalGauge from 'react-horizontal-gauge';
import { fetchCarDetails } from '../../hooks/dataFetching';

import styled from 'styled-components';

const CarDetailsStyles = styled.div`
.carDetails {
  display: flex;
  justify-content: space-evenly;
}
`;

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

const gaugeTicks = [ 
  // Need car c02 emission prediction
  {label: 'C02', value: 7.2 /*<-- Prediction here*/}
]

  useEffect(() => {
    fetchCarDetails(id, setCar)
  }, [id]);

  return (
    <CarDetailsStyles>
      <div className='carDetails'>
        <Card
          id={car.id}
          className="carText"
          style={{ width: '33%' }}>
          <h2>{`${car.make} ${car.model}`}</h2>
          <h3>{`${car.year}`}</h3>
          <Divider />
            <h3>CLASS</h3>
            <p>{car.vclass}</p>
          <Divider />
            <h3>TRANSMISSION</h3>
            <p> {car.trany}</p>
          <Divider />
            <h3>DRIVE</h3>
            <p>{car.drive}</p>
          <Divider />
            <h3>CYLINDERS</h3>
            <p>{car.cylinders}</p>
          <Divider />
            <h3>FUEL</h3>
            <p>{car.fueltype1}</p>
          <Divider />
            <h3>CITY MPG</h3>
            <p>{car.city08}</p>
          <Divider />
            <h3>HIGHWAY MPG</h3>
            <p>{car.highway08}</p>
          <Divider />
            <HorizontalGauge ticks={gaugeTicks} height={70} width={500} min={0} max={10} value={7.3}/>
        </Card>

        <Card
          id={car.id}
          className="carImg"
          style={{ width: '50%' }}
          cover={<img alt={`${car.year} ${car.make} ${car.model}`} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <h3>CO2 EMISSIONS</h3>
            <p>{car.highway08}</p>
        </Card>
    </div>
    </CarDetailsStyles>
  );
};

export default CarDetails;