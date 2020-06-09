import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { fetchPrediction } from "../../hooks/dataFetching";
import { compareAfterTransition } from "../../hooks/pageTransitions";
import setTitle from "../../hooks/setTitle";

import AddToCompare from "../common/buttons/addToCompare";
import Breakdown from "../common/breakdown";
import { BreakdownCard, CompareCarsContainer, CarImg } from "./styles.jsx";

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
            if (car) {
              image = car.list_of_imgs[0] || image;
              title = `${car.year} ${car.make} ${car.model}`;
              predicted_price = car.predicted_price;
              five_year_cost_to_own = car.five_year_cost_to_own;
              yearlyGasSpend = car.fuel_cost / 5;
              yearlyMaintenanceCost = car.maintenance_cost;
              yearlyTotalCost = yearlyGasSpend + yearlyMaintenanceCost;
            }
            return (
              <>
                <CarImg src={image} />
                <h2>{title}</h2>
                <div>
                  <Breakdown
                    purchasePrice={predicted_price}
                    yearlyTotalCost={yearlyTotalCost}
                    totalCost={five_year_cost_to_own}
                    yearlyGasSpend={yearlyGasSpend}
                    yearlyMaintenanceCost={yearlyMaintenanceCost}
                  />
                </div>
              </>
            );
          })}
        </CompareCarsContainer>
      </div>
    </motion.div>
  );
};

export default Compare;
