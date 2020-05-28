import React, { useState, useEffect } from "react";
import { List, Card } from "antd";
import { Link } from 'react-router-dom';
import { fetchSelectedCarDataByYear } from '../../hooks/dataFetching';

const Results = ({ make, model, year, setSubModel, setIsSubModelSelected }) => {
  const [results, setResults] = useState([]);

  const handleSubModelChanges = (id) => {
    setSubModel(id);
    setIsSubModelSelected(true);
  };

  useEffect(() => {
    if(year) {
    fetchSelectedCarDataByYear(make, model, year, setResults)
    }
  }, [make, model, year]);

  return (
    <div>
      <div>
        <h4>
          Your search: {year} {make} {model}
        </h4>
      </div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={results}
        renderItem={(car) => (
          <List.Item>
            <Link to={`/details/${car.make}/${car.model}/${car.id}`} onClick={() => handleSubModelChanges(car.id)}>
              <Card
                id={car.id}
                className="resultsCard"
                title={`${car.year} ${car.make} ${car.model}`}
              >
                <p>
                  <b>Engine ID:</b> {car.engid}
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
