import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { fetchPredictionPrice } from '../../hooks/dataFetching';
import { compareTransition } from '../../hooks/pageTransitions';

import Breakdown from '../breakdown';
import CompareSearch from '../search/compare-search';

const CompareStart = () => {
    const { id } = useParams();

    // Main car state
    const [totalCost, setTotalCost] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [yearlyTotalCost, setYearlyTotalCost] = useState(0);
    const [yearlyGasSpend, setYearlyGasSpend] = useState(0);
    const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0);
                                
    useEffect(() => {
        fetchPredictionPrice(id, (obj) => {
            setTotalCost(Math.round(obj.five_year_cost_to_own));            
            setPurchasePrice(obj.predicted_price);

            setYearlyTotalCost(Math.round(obj.five_year_cost_to_own) / 5);
            setYearlyGasSpend(obj.fuel_cost / 5);
            setYearlyMaintenanceCost(obj.maintenance_cost / 5);
        })
    }, [id]);

    return (
        <motion.div variants={compareTransition} initial='out' animate='in' exit='out'>
            <div className = 'mainContainer'>
                <div className='compare-title'>
                    <h1>Comparing</h1>  
                </div>              
                <div className = 'compare-cars-container'>
                    <div id='original-search' className = 'breakdown-container'>
                        <Breakdown purchasePrice={purchasePrice} yearlyTotalCost={yearlyTotalCost} totalCost={totalCost} yearlyGasSpend={yearlyGasSpend} yearlyMaintenanceCost={yearlyMaintenanceCost} />
                    </div>          
                </div>
                <div className = 'search-container'>
                    <div className="home-results">
                        <CompareSearch id ={id} searchTitle='Choose a car to compare' />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CompareStart;