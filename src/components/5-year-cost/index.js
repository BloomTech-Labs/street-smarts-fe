import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { breakdownTransition } from '../../hooks/pageTransitions';
import { fetchPredictionPrice } from '../../hooks/dataFetching';

import PrevPage from '../../hooks/prevPage';

const CostToOwn = () => {
    const { id } = useParams();

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
        <motion.div variants={breakdownTransition} initial='out' animate='in' exit='out'>
            <div>
                <PrevPage />
                <p>Back to details</p>
            </div>
            <div className = 'mainContainer'>
                <h1>Cost Breakdown</h1>
                <div className = 'row top'>
                    <div className = 'text-block'>
                        <h3>Purchase Price</h3>
                        <p>${purchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                    </div> 
                    <div className = 'text-block'>
                        <h3>Cost per Year</h3>
                        <p>${yearlyTotalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</p> 
                    </div>
                    <div className = 'text-block'>
                        <h3>5-Year Cost to Own</h3>
                        <p>${totalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                    </div>
                </div>
                <div className = 'row bottom'>
                    <div className = 'text-block'>
                        <h3>Cost of Gas per year</h3>
                        <p>${yearlyGasSpend.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                    </div> 
                    <div className = 'text-block'>
                        <h3>Cost of Maintenance per year</h3>
                        <p>${yearlyMaintenanceCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
                    </div>
                </div>
                <div>
                    <div className='handOnHover'>
                        <p>Compare</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CostToOwn;