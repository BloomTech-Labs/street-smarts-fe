import React from "react";
// import { Divider } from "antd";
// import { Wrapper } from './styles';

import HSBar from "react-horizontal-stacked-bar-chart";
import BreakdownStyled from './styles';


const Breakdown = ({ purchasePrice, yearlyTotalCost, totalCost, yearlyGasSpend, yearlyMaintenanceCost }) => {
  const purchase = purchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2});
  
  const gas = yearlyGasSpend.toLocaleString(undefined, {maximumFractionDigits: 2});
  const gasFive = gas * 5;

  const maintenance = yearlyMaintenanceCost.toLocaleString(undefined, {maximumFractionDigits: 2})
  const maintenanceFive = maintenance * 5;

  const total = yearlyTotalCost.toLocaleString(undefined, {maximumFractionDigits: 2});
  const totalFive = totalCost.toLocaleString(undefined, {maximumFractionDigits: 2});
  
  return(
    <BreakdownStyled>

    <div className='breakdown-div'>
      <h2>1 Year: ${total}</h2>
      <h2>5 Years: ${totalFive}</h2>

      <HSBar
        className='cto-chart'
        showTextUp
        fontColor="white"
        data={[
          { value: {purchase}, 
            description: `$${purchase}`,
            color: "red" },
          { value: gasFive,
            description: `$${gasFive}`,
            color: "blue)" },
          { value: maintenanceFive,
            description: `$${maintenanceFive}`,
            color: "purple" }
        ]} />
    </div>




      {/* // <div className = 'row top row-top'>
      //   <div className = 'text-block-top'>
      //     <h3>Purchase Price</h3>
      //     <h1>${purchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
      //   </div> 
      //   <div>
      //     <Divider type='vertical' className='vertical-divider-1' />
      //   </div>
      //   <div className = 'text-block-top'>
      //     <h3>Gas per year</h3>
      //     <h1>${yearlyGasSpend.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
      //   </div> 
      //   <div>
      //     <Divider type='vertical' className='vertical-divider-1' />
      //   </div>
      //   <div className = 'text-block-top'>
      //     <h3>Maintenance per year</h3>
      //     <h1>${yearlyMaintenanceCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
      //   </div>
      // </div>

      // <div className = 'row bottom row-bottom'>
      //   <div className = 'text-block-bottom'>
      //     <h3>1-Year Cost to Own</h3>
      //     <h1>${yearlyTotalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1> 
      //   </div>
      //   <Divider type='vertical' className='vertical-divider-1' />
      //   <div className = 'text-block-bottom'>
      //     <h3>5-Year Cost to Own</h3>
      //     <h1>${totalCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</h1>
      //   </div>
      // </div> */}

    </BreakdownStyled>
  );
};

export default Breakdown;