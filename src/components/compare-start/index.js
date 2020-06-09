import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { fetchPrediction } from '../../hooks/dataFetching';
import { compareTransition } from '../../hooks/pageTransitions';
import { Divider } from 'antd';

import Breakdown from '../common/breakdown';
import CompareSearch from '../sections/search/compare-search';
import AddToCompare from '../common/buttons/addToCompare';
import HorizontalGauge from '../common/gauge';
import CarGallery from '../common/image-gallery';

import { MainContainer } from './styles';

const CompareStart = () => {
    const { id } = useParams();

    const MAX_CARBON_EMISSIONS = 83316;

    // Main car state
    const [mainCar, setMainCar] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [yearlyTotalCost, setYearlyTotalCost] = useState(0);
    const [yearlyGasSpend, setYearlyGasSpend] = useState(0);
    const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0);

    const [predictedCarbonEmissions, setPredictedCarbonEmissions] = useState(NaN);
                                
    useEffect(() => {
        fetchPrediction(id, (obj) => {
            setMainCar(obj);
            setTotalCost(Math.round(obj.five_year_cost_to_own));            
            setPurchasePrice(obj.predicted_price);

            setYearlyTotalCost(Math.round(obj.five_year_cost_to_own) / 5);
            setYearlyGasSpend(obj.fuel_cost / 5);
            setYearlyMaintenanceCost(obj.maintenance_cost / 5);

            setPredictedCarbonEmissions(obj.co2_five_year_kgs);
        })
    }, [id]);

    return (
        <motion.div id='compare-start' variants={compareTransition} initial='out' animate='in' exit='out'>
            <MainContainer>
                <div className='compare-title'>
                    <h1>What does it cost over 5 years?</h1>  
                </div>              
                <div className = 'main-wrapper'>   
                    <div className = 'compare-cars-container'>
                        <div id='original-search' className = 'breakdown-container'>
                            <div className = 'main-car-images-container'>
                                <CarGallery showFullscreenButton = {false} images = {mainCar.list_of_imgs}/>
                            </div>
                            <Breakdown className='main-car-bd' purchasePrice={purchasePrice} yearlyTotalCost={yearlyTotalCost} totalCost={totalCost} yearlyGasSpend={yearlyGasSpend} yearlyMaintenanceCost={yearlyMaintenanceCost} />
                            <HorizontalGauge
                                className='gauge'
                                width={100} height={20}
                                min={0} max={MAX_CARBON_EMISSIONS}
                                value={predictedCarbonEmissions}
                                text={predictedCarbonEmissions.toLocaleString(undefined, {maximumFractionDigits:2}) + " kg"}/>
                        </div>          
                    </div>
                    <Divider type='vertical' className='vertical-divider'/>
                    <div className = 'search-container'>
                        <div className="home-results">
                            <AddToCompare />
                            <CompareSearch id ={id} searchTitle='Choose a car to compare' />
                        </div>
                    </div>
                </div>   
            </MainContainer>
        </motion.div>
    );
};

export default CompareStart;
