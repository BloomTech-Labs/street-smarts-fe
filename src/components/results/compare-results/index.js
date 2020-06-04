import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { List, Card } from "antd";
import { fetchSelectedCarDataByYear } from '../../../hooks/dataFetching';

//
import ResultsStyled from '../home-results/styles';

const CompareResults = ({ make, model, year, id, onClick }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSelectedCarDataByYear(make, model, year, setResults)
  }, [make, model, year]);

  return (
    <div className="home-results">
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
              <Link to={`/compare/${id}/to/${make}/${model}`} onClick={onClick}>
                <Card
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
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </ResultsStyled>
    </div>
  );
};

export default CompareResults;