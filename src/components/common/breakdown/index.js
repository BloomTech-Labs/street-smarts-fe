import React from 'react';
import { Divider } from "antd";

import { Wrapper } from './styles';



const Breakdown = ({ className, purchasePrice, yearlyTotalCost, totalCost, yearlyGasSpend, yearlyMaintenanceCost }) => {
    return(
    <Wrapper className = {className}>
    <div className = 'row-top'>
        <div className = 'text-block-top'>
            <h3>Purchase Price</h3>
            <h1>${purchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
        </div> 
        <div>
        <vl />
        </div>
        <div className = 'text-block-top'>
            <h3>Gas per year</h3>
            <h1>${yearlyGasSpend.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
        </div> 
        <div>
        <vl />
        </div>
        <div className = 'text-block-top'>
            <h3>Maintenance per year</h3>
            <h1>${yearlyMaintenanceCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
        </div>
       
    </div>
    <div className = 'row-bottom'>
        <div className = 'text-block-bottom'>
            <h3>1-Year Cost to Own</h3>
            <h1>${yearlyTotalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1> 
        </div>
        <div className = 'text-block-bottom'>
            <h3>5-Year Cost to Own</h3>
            <h1>${totalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
        </div>
    </div>
    
    </>
    );
};

export default Breakdown;
