import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { List, Card } from "antd";
import { fetchSelectedCarDataByYear } from '../../../hooks/dataFetching';
import styled from 'styled-components';

import ResultsStyled from './styles';

const CompareCarList = styled(List)`
  /*this is cool and ended up being my fix for all my headache*/
`
const CompareCarCard = styled(Card)`
  /*pretty much, I needed to use <List> component that we were importing from antd, but can only call <List /> once in our entire App*/
`
const CompareResults = ({ make, model, year, getUrlWithId, classes }) => {
  const [results, setResults] = useState([]);
  console.log('This is SelectedCarDataByYear', results)
  
  useEffect(() => {
    fetchSelectedCarDataByYear(make, model, year).then(res => setResults(res.data))
  }, [make, model, year]);

  return (
    <ResultsStyled>
      <CompareCarList
        className = {classes}
        grid={{ gutter: 16, column: 1 }}
        dataSource={results}
        renderItem={(car) => (
          <CompareCarList.Item >
            <Link to={getUrlWithId(car.id)}>
              <CompareCarCard
                id={car.id}
                className="resultsCard"
                title={`${car.year} ${car.make} ${car.model}`}>
                <ul>
                  <li><b>Transmission:</b> {car.trany}</li>
                  <li><b>Cylinders:</b> {car.cylinders}</li>
                  <li><b>City MPG:</b> {car.city08}</li>
                  <li><b>Highway MPG:</b> {car.highway08}</li>
                </ul>
              </CompareCarCard>
            </Link>
          </CompareCarList.Item>
        )}
      />
    </ResultsStyled>
  );
};

export default CompareResults;
