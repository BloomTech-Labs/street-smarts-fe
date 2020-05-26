import React, { useState, useEffect } from "react";
import { fetchMakeData, fetchModelData, fetchYearData } from "../../hooks/dataFetching";
import { handleMakeChanges, handleModelChanges, handleYearChanges, handleClear, disableOtherDropdown, disableYearDropdown } from '../../hooks/dropdownFunctions';

import Selection from '../dropdown';
import SingleCarSearch from "../buttons/singleCarSearch";

const Dropdown = () => {
  const [carMakes, setCarMakes] = useState([]);
  const [makeSelected, setMakeSelected] = useState("");

  const [carModels, setCarModels] = useState([]);
  const [modelSelected, setModelSelected] = useState("");

  const [carYears, setCarYears] = useState([]);
  const [yearSelected, setYearSelected] = useState("");

  const [modelDisabled, setModelDisabled] = useState(true);
  const [yearDisabled, setYearDisabled] = useState(true);

  useEffect(() => {
    fetchMakeData(setCarMakes);
  }, []);

  useEffect(() => {
    if (makeSelected !== "") {
      fetchModelData(makeSelected, setCarModels)
    }
  }, [makeSelected]);

  useEffect(() => {
    if (makeSelected && modelSelected !== "") {
      fetchYearData(makeSelected, modelSelected, setCarYears)
    }
  }, [makeSelected, modelSelected]);
  
  return (
    <div id='dropdownForm'>
      <Selection 
        showSearch
        onSelect={(selected) => handleMakeChanges(selected, setMakeSelected, setModelDisabled, setYearSelected)}
        onFocus={() => disableOtherDropdown(setModelDisabled, setModelSelected, setYearDisabled)}
        data={carMakes}/>
      <Selection 
        showSearch
        disabled={modelDisabled}
        onSelect={(selected) => handleModelChanges(selected, setModelSelected, setYearDisabled, setYearSelected)}
        onFocus={() => disableYearDropdown(setYearDisabled, setYearSelected)}
        data={carModels}/>
      <Selection 
        allowClear
        disabled={yearDisabled}
        onSelect={(selected) => handleYearChanges(selected, setYearSelected)}
        onChange={() => handleClear(setYearSelected)}
        data={carYears}/>

      <SingleCarSearch yearSelected={yearSelected} makeSelected={makeSelected} modelSelected={modelSelected} />
    </div>
  );
};

export default Dropdown;