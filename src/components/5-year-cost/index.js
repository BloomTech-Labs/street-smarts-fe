import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { breakdownTransition } from '../../hooks/pageTransitions';
import { fetchPredictionPrice } from '../../hooks/dataFetching';

import PrevPage from '../../hooks/prevPage';

import CompareButton from '../buttons/compare';
import Breakdown from '../breakdown';
import Search from '../search';

const CostToOwn = () => {
    const [isComparing, setIsComparing] = useState(false);

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
                <div id='original-search'>
                    <Breakdown purchasePrice={purchasePrice} yearlyTotalCost={yearlyTotalCost} totalCost={totalCost} yearlyGasSpend={yearlyGasSpend} yearlyMaintenanceCost={yearlyMaintenanceCost} />
                </div>
                {isComparing ? (
                    <Search searchTitle='Choose car to compare' />
                ) : (
                    <></>
                )
                }
                <div>
                {isComparing ? (
                    <></>
                ) : (
                    <CompareButton onClick={() => setIsComparing(!isComparing)}/>
                )
                }
                </div>
            </div>
        </motion.div>
    );
};

export default CostToOwn;