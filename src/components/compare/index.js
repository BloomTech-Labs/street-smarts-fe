import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchPrediction } from "../../hooks/dataFetching";
import { compareAfterTransition } from "../../hooks/pageTransitions";
import setTitle from "../../hooks/setTitle";
import Search from '../sections/search';
import Cost from "../cost";
import Trees from '../common/trees';

import {
  CompareCarsContainer,
  CompareSearchContainer,
  CarImgContainer,
  CarbonGaugeContainer,
  CarbonGauge,
  DividerCol,
  TreesContainer
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
          <p className = 'disclaimer'>Based on averages over 5 years</p>
        </div>
        <CompareCarsContainer>
          {ids.map((carId, idx) => {
            let car = cars[carId];
            let image = "";
            let title = "Loading...";
            let predictedCarbonEmissions = NaN;
            if (car) {
              image = car.list_of_imgs[0] || image;
              title = `${car.year} ${car.make} ${car.model}`;
          
              predictedCarbonEmissions = car.co2_five_year_kgs;
            }
            return (
              <React.Fragment key={idx}>
                {idx !== 0 && <DividerCol type="vertical" />}
                <CarImgContainer><img src={image} alt = 'Car' /></CarImgContainer>
                
                <h2><Link to={`/details/${carId}`}>{title}</Link></h2>
                <TreesContainer>
                  {car ? <Trees trees = {car} /> : <></>}
                </TreesContainer>
                <Cost prediction={car}/>
                <CarbonGaugeContainer>                
                
                  <h3>Carbon Emissions (5 Years): {predictedCarbonEmissions} kgs </h3>
                  <CarbonGauge
                    width={100}
                    height={20}
                    min={0}
                    max={MAX_CARBON_EMISSIONS}
                    value={predictedCarbonEmissions}
                     />
                </CarbonGaugeContainer>
              </React.Fragment>
            );
          })}    
          
          { ids.length < 3 ? (<>
          { ids.length > 0 && <DividerCol type="vertical" /> }
          <CompareSearchContainer>
            <Search searchClass = 'compare-search' resultsClass = 'compare-results' getUrlWithId={getUrlWithId} searchTitle='Choose a car to compare' />
          </CompareSearchContainer>
          </>) : (<></>)
          }
        </CompareCarsContainer>
      </div>
    </motion.div>
  );
};

export default Compare;