import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchPrediction } from "../../hooks/dataFetching";
import setTitle from "../../hooks/setTitle";
import CostStyled from "./styles";
import HSBar from "react-horizontal-stacked-bar-chart";

const Cost= () => {
  const { id } = useParams();

  const [totalCost, setTotalCost] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [yearlyTotalCost, setYearlyTotalCost] = useState(0);
  const [yearlyGasSpend, setYearlyGasSpend] = useState(0);
  const [yearlyMaintenanceCost, setYearlyMaintenanceCost] = useState(0);

  const [carMake, setCarMake] = useState();
  const [carModel, setCarModel] = useState();

  const gasFive = yearlyGasSpend * 5;
  const maintenanceFive = yearlyMaintenanceCost * 5;

  useEffect(() => {
    fetchPrediction(id, (obj) => {
      setTotalCost(Math.round(obj.five_year_cost_to_own));
      setPurchasePrice(obj.predicted_price);

      setYearlyTotalCost(Math.round(obj.five_year_cost_to_own - obj.predicted_price) / 5);
      setYearlyGasSpend(obj.fuel_cost / 5);
      setYearlyMaintenanceCost(obj.maintenance_cost);

      setCarMake(obj.make);
      setCarModel(obj.model);
    });
  }, [id]);

  useEffect(() => {
    if (carMake && carModel) {
      setTitle(`${carMake} ${carModel}`);
    } else {
      setTitle();
    }
  }, [carMake, carModel]);

  return (
    <CostStyled>
    <div className='breakdown-div'>
      <h3>Cost Over 5 Years: ${totalCost}</h3>
      <HSBar
        className='cto-chart'
        showTextUp
        fontColor="white"
        data={[
          { value: purchasePrice, 
            description: `Purchase $${purchasePrice}`,
            color: '#08b862' },
          { value: gasFive,
            description: `Gas $${gasFive}`,
            color: "#80eb44" },
          { value: maintenanceFive,
            description: `Maintenance $${maintenanceFive}`,
            color: "#e6ff01" }
        ]} />
      
      <h3 className='title-per-year'>Cost per Year: ${yearlyTotalCost}</h3>
      <HSBar
        className='cto-chart'
        showTextUp
        fontColor="white"
        data={[
          { value: gasFive,
            description: `Gas: $${yearlyGasSpend}`,
            color: "#80eb44" },
          { value: maintenanceFive,
            description: `Maintenance: $${yearlyMaintenanceCost}`,
            color: "#e6ff01" }
        ]} />

    </div>

    </CostStyled>

  );
};

export default Cost;