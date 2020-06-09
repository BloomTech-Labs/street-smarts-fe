import React from 'react';

const Breakdown = ({ purchasePrice, yearlyTotalCost, totalCost, yearlyGasSpend, yearlyMaintenanceCost }) => {
    return(
    <>
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
    </>
    );
};

export default Breakdown;