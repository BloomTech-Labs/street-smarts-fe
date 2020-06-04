import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchPredictionPrice } from '../../hooks/dataFetching';
import { compareTransition } from '../../hooks/pageTransitions';

import AddToCompare from '../buttons/addToCompare';
import Breakdown from '../breakdown';
import Search from '../search';
import CompareResults from '../results/compare-results';

const CompareStart = () => {
    const { id } = useParams();
    const [mainCar, setMainCar] = useState({});

    // Main car state
    const [totalCost, setTotalCost] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [yearlyTotalCost, setYearlyTotalCost] = useState(0);
    const [yearlyGasSpend, setYearlyGasSpend] = useState(0);
    const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0);

    // Compared car state
    const [comparedTotalCost, setComparedTotalCost] = useState(0);
    const [comparedPurchasePrice, setComparedPurchasePrice] = useState(0);
    const [comparedYearlyTotalCost, setComparedYearlyTotalCost] = useState(0);
    const [comparedYearlyGasSpend, setComparedYearlyGasSpend] = useState(0);
    const [comparedYearlyMaintenanceCost, setComparedYearlyMaintenanceCost] = useState(0);


    const [isCarSelected, setIsCarSelected] = useState(false);

    useEffect(() => {
        fetchPredictionPrice(id, (obj) => {
            setMainCar(obj);

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
                    <AddToCompare className ='handOnHover'/>
                </div>              
                <div className = 'compare-cars-container'>
                    <div id='original-search' className = 'breakdown-container'>
                        <Breakdown purchasePrice={purchasePrice} yearlyTotalCost={yearlyTotalCost} totalCost={totalCost} yearlyGasSpend={yearlyGasSpend} yearlyMaintenanceCost={yearlyMaintenanceCost} />
                    </div>          
                </div>

                    <div>
                        <Search searchTitle='Choose a car' Results = {() => {return (<CompareResults id={id} onClick={setIsCarSelected(!isCarSelected)}/>)  }} />
                    </div>

            </div>
        </motion.div>
    );
};

export default CompareStart;