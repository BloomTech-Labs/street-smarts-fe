import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { fetchPrediction } from '../../hooks/dataFetching';
import { compareAfterTransition } from '../../hooks/pageTransitions';

import AddToCompare from '../common/buttons/addToCompare';
import Breakdown from '../common/breakdown';
                     
const Compare = () => {
    const { id, carID } = useParams();
        // Main car state
    const [mainCar, setMainCar] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [yearlyTotalCost, setYearlyTotalCost] = useState(0);
    const [yearlyGasSpend, setYearlyGasSpend] = useState(0);
    const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0);

    // Compared car state
    const [comparedCar, setComparedCar] = useState([]);
    const [comparedTotalCost, setComparedTotalCost] = useState(0);
    const [comparedPurchasePrice, setComparedPurchasePrice] = useState(0);
    const [comparedYearlyTotalCost, setComparedYearlyTotalCost] = useState(0);
    const [comparedYearlyGasSpend, setComparedYearlyGasSpend] = useState(0);
    const [comparedYearlyMaintenanceCost, setComparedYearlyMaintenanceCost] = useState(0);

    useEffect(() => {
        fetchPrediction(id, (obj) => {
            setMainCar(obj);
            setTotalCost(Math.round(obj.five_year_cost_to_own));            
            setPurchasePrice(obj.predicted_price);

            setYearlyTotalCost(Math.round(obj.five_year_cost_to_own) / 5);
            setYearlyGasSpend(obj.fuel_cost / 5);
            setYearlyMaintenanceCost(obj.maintenance_cost / 5);
        })
    }, [id]);

    useEffect(() => {
        fetchPrediction(carID, (obj) => {
            setComparedCar(obj);
            setComparedTotalCost(Math.round(obj.five_year_cost_to_own));            
            setComparedPurchasePrice(obj.predicted_price);

            setComparedYearlyTotalCost(Math.round(obj.five_year_cost_to_own) / 5);
            setComparedYearlyGasSpend(obj.fuel_cost / 5);
            setComparedYearlyMaintenanceCost(obj.maintenance_cost / 5);
        })
    }, [carID]);
    
    
    return (
        <motion.div variants={compareAfterTransition} initial='out' animate='in' exit='out'>
            <div className = 'compare-container'>
                <div className='compare-title'>
                    <h1>Comparing {mainCar.year} {mainCar.make} {mainCar.model} to {comparedCar.year} {comparedCar.make} {comparedCar.model} </h1>  
                    {/* <AddToCompare className ='handOnHover'/> */}
                </div> 
                <div className = 'compare-cars-container'>
                    <div id='original-search' className = 'breakdown-container'>
                        <h2>{mainCar.year} {mainCar.make} {mainCar.model}</h2>
                        <Breakdown purchasePrice={purchasePrice} yearlyTotalCost={yearlyTotalCost} totalCost={totalCost} yearlyGasSpend={yearlyGasSpend} yearlyMaintenanceCost={yearlyMaintenanceCost} />
                    </div>          
                </div>

                <div className = 'compare-cars-container'>
                    <div id='compare-car-1' className = 'breakdown-container'>
                    <h2>{comparedCar.year} {comparedCar.make} {comparedCar.model}</h2>
                        <Breakdown purchasePrice={comparedPurchasePrice} yearlyTotalCost={comparedYearlyTotalCost} totalCost={comparedTotalCost} yearlyGasSpend={comparedYearlyGasSpend} yearlyMaintenanceCost={comparedYearlyMaintenanceCost} />
                    </div>          
                </div>
            </div>
        </motion.div>
    );
};

export default Compare;
