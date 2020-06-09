import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { breakdownTransition } from '../../hooks/pageTransitions';
import { fetchPrediction } from '../../hooks/dataFetching';

import PrevPage from '../../hooks/prevPage';

import CompareButton from '../common/buttons/compare';
import Breakdown from '../common/breakdown';

const CostToOwn = () => {
    const { id } = useParams();

    const [totalCost, setTotalCost] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [yearlyTotalCost, setYearlyTotalCost] = useState(0);
    const [yearlyGasSpend, setYearlyGasSpend] = useState(0);
    const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0);

    useEffect(() => {
        fetchPrediction(id, (obj) => {
            setTotalCost(Math.round(obj.five_year_cost_to_own));            
            setPurchasePrice(obj.predicted_price);

            setYearlyTotalCost(Math.round(obj.five_year_cost_to_own) / 5);
            setYearlyGasSpend(obj.fuel_cost / 5);
            setYearlyMaintenanceCost(obj.maintenance_cost / 5);
        })
    }, [id]);

    return (
        <motion.div variants={breakdownTransition} initial='out' animate='in' exit='out'>
            <div className = 'prev-page-container'>
                <PrevPage />
            </div>
            <div className = 'mainContainer'>
                <h1>Cost Breakdown</h1>                
                <div className = 'compare-cars-container'>
                    <div id='original-search' className = 'breakdown-container'>
                        <Breakdown purchasePrice={purchasePrice} yearlyTotalCost={yearlyTotalCost} totalCost={totalCost} yearlyGasSpend={yearlyGasSpend} yearlyMaintenanceCost={yearlyMaintenanceCost} />
                    </div>          
                </div>

                <div className = 'compare-button-container'>
                    <Link to = {`/compare/${id}`} >
                        <CompareButton />
                    </Link>
                </div>

            </div>
        </motion.div>
    );
};

export default CostToOwn;