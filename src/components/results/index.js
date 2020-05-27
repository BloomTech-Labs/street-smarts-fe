import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { List, Card } from "antd";
import { Link } from 'react-router-dom';
// Refactored this data fetching function into its own folder
import { fetchSelectedCarData, fetchSelectedCarDataByYear } from '../../hooks/dataFetching';

const Results = () => {
  const { make, model, year } = useParams();

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSelectedCarData(make, model)
      .then((res) => {
        console.log('This is data from Dropdown search results', res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log("Error indsdasdsadas  response of selected car data", err);
      });
  }, [make, model]);

  useEffect(() => {
    if(year) {
    fetchSelectedCarDataByYear(make, model, year)
      .then((res) => {
        console.log('This is data from Dropdown search results', res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log("Error in response of selected car data", err);
      });
    }
  }, [make, model, year]);

  return (
    <div>
      <div>
        <h4>
          Your search: {make} {model}
        </h4>
      </div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={results}
        renderItem={(car) => (
          <List.Item>
            <Link to={`/details/${car.make}/${car.model}/${car.id}`}>
              <Card
                id={car.id}
                className="resultsCard"
                title={`${car.year} ${car.make} ${car.model}`}
              >
                <p>
                  <b>Engine ID:</b> {car.co2tailpipegpm}
                </p>
                <p>
                  <b>Transmission:</b> {car.trany}
                </p>
                <p>
                  <b>Cyclinders:</b> {car.cylinders}
                </p>
                <p>
                  <b>City MPG:</b> {car.city08}
                </p>
                <p>
                  <b>Highway MPG:</b> {car.highway08}
                </p>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Results;
