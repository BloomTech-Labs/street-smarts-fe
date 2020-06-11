import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchPrediction } from "../../hooks/dataFetching";
import setTitle from "../../hooks/setTitle";
import CostStyled from "./styles";
import HSBar from "react-horizontal-stacked-bar-chart";
import en_US from "antd/lib/calendar/locale/en_US";

const Cost = (props) => {
  const { id } = useParams();

  const prediction = props.prediction ? props.prediction : {five_year_cost_to_own: 0, predicted_price: 0, fuel_cost: 0, maintenance_cost: 0}

  const maintenanceFive = prediction.maintenance_cost * 5;

  return (
    <CostStyled>
      <div className='breakdown-div'>
        <h3>Cost Over 5 Years: ${prediction.five_year_cost_to_own}</h3>
        <HSBar
          className='cto-chart'
          showTextUp
          data={[
            { value: prediction.predicted_price, 
              description: `Purchase $${prediction.predicted_price}`,
              color: '#08b862' },
            { value: prediction.fuel_cost,
              description: `Gas $${prediction.fuel_cost.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
              color: "#80eb44" },
            { value: maintenanceFive,
              description: `Maintenance $${maintenanceFive}`,
              color: "#e6ff01" }
          ]} />
        
        <h3 className='title-per-year'>Cost per Year: ${(prediction.fuel_cost / 5) + (prediction.maintenance_cost)}</h3>
        <HSBar
          className='cto-chart'
          showTextUp
          data={[
            { value: prediction.fuel_cost / 5,
              description: `Gas $${(prediction.fuel_cost / 5).toLocaleString(undefined, {maximumFractionDigits:0})}`,
              color: "#80eb44" },
            { value: maintenanceFive,
              description: `Maintenance: $${prediction.maintenance_cost.toLocaleString(undefined, {maximumFractionDigits:0})}`,
              color: "#e6ff01" }
          ]} />
      </div>
    </CostStyled>
  );
};

export default Cost;