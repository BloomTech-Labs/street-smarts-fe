import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { Card, Divider } from 'antd';
import { fetchCarDetails, fetchPrediction } from '../../hooks/dataFetching';
import { detailsTransition } from '../../hooks/pageTransitions';
import setTitle from '../../hooks/setTitle';
import HorizontalGauge from '../common/gauge';
import CarGallery from '../common/image-gallery';
import CarDetailsStyles from './styles';
import { MAX_CARBON_EMISSIONS } from '../../constants';
import Cost from '../cost/index';
import Compare from '../common/buttons/compare';
import Trees from '../common/trees';

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});
  const [trees, setTrees] = useState([]);
  const [carImages, setCarImages] = useState([]);
  const [predictedCarbonEmissions, setPredictedCarbonEmissions] = useState(NaN);
  const [prediction, setPrediction] = useState(null);



  useEffect(() => {
    fetchCarDetails(id).then(res => setCar(res.data))
    fetchPrediction(id).then((res) => {
      setPredictedCarbonEmissions(res.data.co2_five_year_kgs);
      setPrediction(res.data);
      setCarImages(res.data.list_of_imgs);
      setTrees(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (car.make && car.model) {
      setTitle(`${car.make} ${car.model}`);
    }
  }, [car]);

  return (
    <motion.div variants={detailsTransition} initial='out' animate='in' exit='out'>
      <div className = 'disclaimer-container'>
        <p className = 'disclaimer'>Based on averages over 5 years</p>
      </div>
      <CarDetailsStyles className='detailsContainer'>
        <div className='carDetails'>

          <Card
            className='carText'
            id={car.id}>
            <h1>{`${car.make} ${car.model}`}</h1>
            <h3>{`${car.year}`}</h3>
            <Divider className='divider' />
              <h3>CO<sub>2</sub> EMISSIONS: {predictedCarbonEmissions} kgs</h3>
              <HorizontalGauge
                className='gauge'
                width={100} height={20}
                min={0} max={MAX_CARBON_EMISSIONS}
                value={predictedCarbonEmissions}/>
              <Trees trees = {trees}/>
            <Divider className='divider' />        
              <Cost prediction={prediction}/>
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
            <Divider />
          </Card>

          <Card
            className='carImg'
            id={car.id}>
            <CarGallery showFullscreenButton={true} images = {carImages} />
            <div className='compare-button'>
              <h3>Compare to Other Vehicles</h3>
              <Compare />
            </div>
            <div className='eco-driving-link'>
              <a href="/articles/eco-driving" rel="noopener noreferrer" target="_blank"><h3>Decrease your CO<sub>2</sub> with<h2>eco-driving</h2>Learn how</h3></a>
            </div>
          </Card>
        
        </div>        
      </CarDetailsStyles>
    </motion.div>
  );
};

export default CarDetails;
