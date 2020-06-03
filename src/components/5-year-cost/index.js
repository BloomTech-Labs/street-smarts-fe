import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { pageTransition } from '../../App';

const CostToOwn = ( { purchasePrice, gasPrice, maintenancePrice, totalCost } ) => {
    const [yearlyTotalCost, setYearlyTotalCost] = useState(0.0);
    const [yearlyGasSpend, setYearlyGasSpend] = useState(0.0);
    const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0.0);

    useEffect(() => {
        setYearlyTotalCost(totalCost / 5);
        setYearlyGasSpend(gasPrice / 5);
        setYearlyMaintenanceCost(maintenancePrice / 5);
    }, [totalCost]);

    return (
        <motion.div variants={pageTransition} initial='out' animate='in' exit='out'>
            <div>
                {purchasePrice} {yearlyTotalCost} {totalCost}
            </div>
            <div>
                {yearlyGasSpend} {yearlyMaintenanceCost}
            </div>
        </motion.div>
    );
};

export default CostToOwn;