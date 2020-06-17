import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { motion } from "framer-motion";
import { fetchPrediction } from "../../hooks/dataFetching";
import { compareAfterTransition } from "../../hooks/pageTransitions";
import setTitle from "../../hooks/setTitle";
import Search from '../sections/search';
import Cost from "../cost";

import {
  CompareCarsContainer,
  CompareSearchContainer,
  CarImgContainer,
  CarbonGaugeContainer,
  CarbonGauge,
  DividerCol,
} from "./styles.jsx";
import { MAX_CARBON_EMISSIONS } from "../../constants";

const Compare = () => {
  const { id, carID, carID2 } = useParams();

  // Remove `/` from the end of the base url
  const baseUrl = useLocation().pathname.replace(/\/+$/, "");

  // Main car state
  const [ids] = useState(() => {
    const list_of_ids = [];
    if(id !== undefined) {
      list_of_ids.push(id);
    }
    if(carID !== undefined) {
      list_of_ids.push(carID);
    }
    if(carID2 !== undefined) {
      list_of_ids.push(carID2);
    }
    return list_of_ids;
  });
  const [cars, setCars] = useState(() => {
    let res = {};
    for (let i of ids) {
      res[i] = null;
    }
    return res;
  });

  useEffect(() => {
    for (let i of ids) {
      fetchPrediction(i).then((res) => {
        setCars((cars) => {
          return { ...cars, [res.data.id]: res.data };
        });
      });
    }
  }, [ids]);

  useEffect(() => setTitle(), []);

  const getUrlWithId = (id) => {
    if (ids.length === 0) {
      return `${baseUrl}/${id}`;
    } else {
      return `${baseUrl}/to/${id}`;
    }
  };

  return (
    <motion.div
      variants={compareAfterTransition}
      initial="out"
      animate="in"
      exit="out" >
      <div className="compare-container">
        <div className="compare-title">
          <h1>Compare Vehicles</h1>
        </div>
        <CompareCarsContainer>
          {ids.map((carId, idx) => {
            let car = cars[carId];
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
              yearlyTotalCost = predicted_price + yearlyGasSpend + yearlyMaintenanceCost;
              predictedCarbonEmissions = car.co2_five_year_kgs;
            }
            return (
              <React.Fragment key={carId}>
                {idx !== 0 && <DividerCol type="vertical" />}
                <CarImgContainer><img src={image} /></CarImgContainer>
                <h2>{title}</h2>
                <Cost prediction={car}/>
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
                    } />
                </CarbonGaugeContainer>
              </React.Fragment>
            );
          })}    
          
          { ids.length < 3 ? (<>
          { ids.length > 0 && <DividerCol type="vertical" /> }
          <CompareSearchContainer>
            <Search getUrlWithId={getUrlWithId} searchTitle='Choose a car to compare' />
          </CompareSearchContainer>
          </>) : (<></>)
          }
        </CompareCarsContainer>
      </div>
    </motion.div>
  );
};

export default Compare;
