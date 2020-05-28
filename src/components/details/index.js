import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card, Divider } from 'antd';
import { fetchCarDetails } from '../../hooks/dataFetching';
import CarDetailsStyles from './styles';

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    fetchCarDetails(id, setCar)
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
        </Card>

        <Card
          className='carImg'
          id={car.id}
          cover={<img alt={`${car.year} ${car.make} ${car.model}`} src="https://live.staticflickr.com/7836/47492196641_8228341865_b.jpg" />}>
            <h3>CO<sub>2</sub> EMISSIONS</h3>
            <p>{car.highway08}</p>
        </Card>
      </div>
    </CarDetailsStyles>
  );
};

export default CarDetails;