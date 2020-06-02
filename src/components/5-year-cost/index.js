import React, { useState, useEffect } from 'react';

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
        <>
        <div>
            {purchasePrice} {yearlyTotalCost} {totalCost}
        </div>
        <div>
            {yearlyGasSpend} {yearlyMaintenanceCost}
        </div>
        </>
    );
};

export default CostToOwn;