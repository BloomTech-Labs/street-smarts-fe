import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { List, Card } from "antd";
import { fetchSelectedCarDataByYear } from '../../../hooks/dataFetching';
import styled from 'styled-components';

import ResultsStyled from '../home-results/styles';

const CompareCarList = styled(List)`
  /*this is cool and ended up being my fix for all my headache*/
`

const CompareCarCard = styled(Card)`
  /*pretty much, I needed to use <List> component that we were importing from antd, but can only call <List /> once in our entire App*/
`

const CompareResults = ({ make, model, year }) => {
  const {id} = useParams();
  const [results, setResults] = useState([]);
    console.log('This is SelectedCarDataByYear', results)
  useEffect(() => {
    fetchSelectedCarDataByYear(make, model, year, setResults)    
  }, [make, model, year]);

  return (
    <div className="home-results">
      <ResultsStyled className='THIS-SHOULD-BE-COMPARE'>
          <h4>
            Your search: {year} {make} {model}
          </h4>
        {/* </div> */}
        <CompareCarList
          grid={{ gutter: 16, column: 4 }}
          dataSource={results}
          renderItem={(car) => (
            <CompareCarList.Item >
              <Link to={`/compare/${id}/to/${car.id}`}>
                <CompareCarCard
                  id={car.id}
                  className="resultsCard"
                  title={`${car.year} ${car.make} ${car.model}`}
                >
                <ul>
                  <li>
                    <b>Engine ID:</b> {car.engid}
                  </li>
                  <li>
                    <b>Transmission:</b> {car.trany}
                  </li>
                  <li>
                    <b>Cylinders:</b> {car.cylinders}
                  </li>
                  <li>
                    <b>City MPG:</b> {car.city08}
                  </li>
                  <li>
                    <b>Highway MPG:</b> {car.highway08}
                  </li>
                </ul>
                </CompareCarCard>
              </Link>
            </CompareCarList.Item>
          )}
        />
      </ResultsStyled>
      </div>
  );
};

export default CompareResults;