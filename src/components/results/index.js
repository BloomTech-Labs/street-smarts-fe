import React, { useContext } from "react";
import { CarContext } from '../../contexts/CarContext';

function Results() {
	const car = useContext(CarContext);

	return (
		<div className="results">
			<p>{car.make}, {car.model}</p>
		</div>
	);
}

export default Results;