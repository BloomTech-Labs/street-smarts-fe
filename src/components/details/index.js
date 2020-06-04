import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, Divider } from "antd";
import HorizontalGauge from '../gauge';
import { fetchCarDetails, fetchPredictionCarbonEmissions, fetchPredictionPrice } from '../../hooks/dataFetching';
import CarDetailsStyles from './styles';

import { detailsTransition } from '../../hooks/pageTransitions';
import chevron from '../../assets/images/chevron.png';
import CarGallery from '../image-gallery';

const MAX_CARBON_EMISSIONS = 1400;

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});
  const [carImages, setCarImages] = useState([]);
  const [predictedCarbonEmissions, setPredictedCarbonEmissions] = useState(NaN);
  const [predictedPrice, setPredictedPrice] = useState(null);

  useEffect(() => {
    fetchCarDetails(id, setCar)
    fetchPredictionCarbonEmissions(id, (obj) => {
      setPredictedCarbonEmissions(obj.predicted_carbon_emissions);
    });
    fetchPredictionPrice(id, (obj) => {
      setPredictedPrice(obj.five_year_cost_to_own.toLocaleString(undefined, {maximumFractionDigits: 2}));
      setCarImages(obj.list_of_imgs);
    });
  }, [id]);

  return (
    <motion.div variants={detailsTransition} initial='out' animate='in' exit='out'>
      <CarDetailsStyles className = 'detailsContainer'>
        <div className='carDetails'>
          <Card
            className='carText'
            id={car.id}>
            <h1>{`${car.make} ${car.model}`}</h1>
            <h3>{`${car.year}`}</h3>
            <Divider className='divider' />
            <h3>CO<sub>2</sub> EMISSIONS</h3>
              <HorizontalGauge
                className='gauge'
                width={100} height={20}
                min={0} max={MAX_CARBON_EMISSIONS}
                value={predictedCarbonEmissions.toLocaleString(undefined, {maximumFractionDigits:2})}/>
            <Divider className='divider' />             
            <h3>Cost of Ownership (5 years)</h3>
            <div>
              <h1 className='cto'>${predictedPrice}</h1>
            </div>
            <div className ='chevron-down'>
              <p>5 Year Cost Breakdown</p>
              <Link to={`/details/${car.make}/${car.model}/${car.id}/cost-to-own`}>
                <img src={chevron} alt= 'View cost to own' />  
              </Link>
            </div>
            <Divider className='divider' />
              <h3>MPG</h3>
              <div className='mpg'>
                <div>
                  <h3>City</h3>
                  <p>{car.city08}</p>
                </div>
                <vl />
                <div>
                  <h3>hwy</h3>
                  <p>{car.highway08}</p>
                </div>
              </div>
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
            <Divider />          </Card>

          <Card
            className='carImg'
            id={car.id}>
            <CarGallery images = {carImages} />
          </Card>
        </div>        

      </CarDetailsStyles>
    </motion.div>
  );
};

export default CarDetails;
