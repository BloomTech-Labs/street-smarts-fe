import React, { useState, useEffect } from "react";
import { List, Card } from "antd";
import { Link } from 'react-router-dom';
import { fetchSelectedCarDataByYear } from '../../../../hooks/dataFetching';
import ResultsStyled from './styles';

const HomeResults = ({ make, model, year }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSelectedCarDataByYear(make, model, year, setResults)
  }, [make, model, year]);

  return (
    <ResultsStyled>
        <h4>
          Your search: {year} {make} {model}
        </h4>
      {/* </div> */}
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={results}
        renderItem={(car) => (
          <List.Item>
            <Link to = {`/details/${car.make}/${car.model}/${car.id}`}>
              <Card
                id={car.id}
                className="resultsCard"
                title={`${car.year} ${car.make} ${car.model}`}
              >
              <ul>
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
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </ResultsStyled>
  );
};

export default HomeResults;
