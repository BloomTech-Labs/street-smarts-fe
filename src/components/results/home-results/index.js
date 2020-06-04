import React, { useState, useEffect } from "react";
import { List, Card } from "antd";
import { Link } from 'react-router-dom';
import { fetchSelectedCarDataByYear } from '../../../hooks/dataFetching';
import ResultsStyled from './styles';

const HomeResults = ({ make, model, year }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSelectedCarDataByYear(make, model, year, setResults)
  }, [make, model, year]);

  return (
    <ResultsStyled>
      <div>
        <h3 className='home-results-title'>
          Your search: {year} {make} {model}
        </h3>
      </div>

      {/* </div> */}
      <List
        grid={{ 
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5, }}
        dataSource={results}
        renderItem={(car) => (
          <List.Item>
            <Link to = {`/details/${car.make}/${car.model}/${car.id}`}>
              <Card
                id={car.id}
                className="resultsCard"
                title={`${car.make} ${car.model}`}
              >
              <ul>
                <li className='year'>
                  <b>{car.year}</b>
                </li>
                <li className='trany'>
                  <b>{car.trany}</b>
                </li>
                <li className='cylinders'>
                  <b>{car.cylinders} Cylinders</b>
                </li>
              </ul>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </ResultsStyled>
  );
};

export default HomeResults;
