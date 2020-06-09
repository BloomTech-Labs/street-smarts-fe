import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { fetchPrediction } from "../../hooks/dataFetching";
import { compareAfterTransition } from "../../hooks/pageTransitions";
import setTitle from "../../hooks/setTitle";

import AddToCompare from "../common/buttons/addToCompare";
import Breakdown from "../common/breakdown";
import {
  BreakdownContainer,
  CompareCarsContainer,
  CarImg,
  CarbonGaugeContainer,
  CarbonGauge,
} from "./styles.jsx";
import { MAX_CARBON_EMISSIONS } from "../../constants";

const Compare = () => {
  const { id, carID } = useParams();
  // Main car state

  const [ids, setIds] = useState([id, carID]);
  const [cars, setCars] = useState(() => {
    let res = {};
    for (let i of ids) {
      res[i] = null;
    }
    return res;
  });

  useEffect(() => {
    for (let i of ids) {
      fetchPrediction(i, (obj) => {
        setCars((cars) => {
          return { ...cars, [obj.id]: obj };
        });
      });
    }
  }, [ids]);

  useEffect(() => setTitle(), []);

  return (
    <motion.div
      variants={compareAfterTransition}
      initial="out"
      animate="in"
      exit="out"
    >
      <div className="compare-container">
        <div className="compare-title">
          <h1>Comparing</h1>
        </div>
        <CompareCarsContainer>
          {Object.entries(cars).map(([carId, car]) => {
            let image = "";
            let title = "Loading...";
            let predicted_price = "";
            let yearlyTotalCost = "";
            let yearlyGasSpend = "";
            let yearlyMaintenanceCost = "";
            let five_year_cost_to_own = "";
            let predictedCarbonEmissions = NaN;
            if (car) {
              image = car.list_of_imgs[0] || image;
              title = `${car.year} ${car.make} ${car.model}`;
              predicted_price = car.predicted_price;
              five_year_cost_to_own = car.five_year_cost_to_own;
              yearlyGasSpend = car.fuel_cost / 5;
              yearlyMaintenanceCost = car.maintenance_cost;
              yearlyTotalCost = yearlyGasSpend + yearlyMaintenanceCost;
              predictedCarbonEmissions = car.co2_five_year_kgs;
            }
            return (
              <React.Fragment key={carId}>
                <CarImg src={image} />
                <h2>{title}</h2>
                <BreakdownContainer>
                  <Breakdown
                    purchasePrice={predicted_price}
                    yearlyTotalCost={yearlyTotalCost}
                    totalCost={five_year_cost_to_own}
                    yearlyGasSpend={yearlyGasSpend}
                    yearlyMaintenanceCost={yearlyMaintenanceCost}
                  />
                </BreakdownContainer>
                <CarbonGaugeContainer>
                  <h3>Carbon Emissions (5 Years)</h3>
                  <CarbonGauge
                    width={100}
                    height={20}
                    min={0}
                    max={MAX_CARBON_EMISSIONS}
                    value={predictedCarbonEmissions}
                    text={
                      predictedCarbonEmissions.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      }) + " kg"
                    }
                  />
                </CarbonGaugeContainer>
              </React.Fragment>
            );
          })}
        </CompareCarsContainer>
      </div>
    </motion.div>
  );
};

export default Compare;
