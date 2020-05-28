import React, { useState, useEffect } from "react";
import { fetchMakeData, fetchModelData, fetchYearData } from "../../hooks/dataFetching";
import { handleMakeChanges, handleModelChanges, handleYearChanges, handleSubModelClick,handleClear, disableOtherDropdown, disableYearDropdown } from '../../hooks/dropdownFunctions';

import Selection from '../dropdown';
import SingleCarSearch from "../buttons/singleCarSearch";
import Results from '../results';

export default function Dropdown()  {
  const [carMakes, setCarMakes] = useState([]);
  const [makeSelected, setMakeSelected] = useState("");

  const [carModels, setCarModels] = useState([]);
  const [modelSelected, setModelSelected] = useState("");

  const [carYears, setCarYears] = useState([]);
  const [yearSelected, setYearSelected] = useState("");

  const [modelDisabled, setModelDisabled] = useState(true);
  const [yearDisabled, setYearDisabled] = useState(true);

  const [subModel, setSubModel] = useState("");
  const [subModelDisabled, setSubModelDisabled] = useState(true);
  const [isSubModelSelected, setIsSubModelSelected] = useState(true);

// WHAT LIST IS SHOWING
// Handles Make Dropdown state
  useEffect(() => {
    fetchMakeData(setCarMakes);
  }, []);

// Handles Model Dropdown state
  useEffect(() => {
    if (makeSelected !== "") {
      fetchModelData(makeSelected, setCarModels)
    }
  }, [makeSelected]);

  
// Handles Year Dropdown state
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
        onSelect={(selected) => handleYearChanges(selected, setYearSelected, setSubModelDisabled)}
        onChange={() => handleClear(setYearSelected)}
        data={carYears}/>

      {isSubModelSelected ? (
        <Selection
          disabled={subModelDisabled}
          value={subModel}
          onDropdownVisibleChange={() => handleSubModelClick(setIsSubModelSelected)}
          data={carYears}
        />
      ) : (
        <Results make = {makeSelected} model = {modelSelected} year = {yearSelected} setSubModel = {setSubModel} setIsSubModelSelected={setIsSubModelSelected} />
      )}

      <SingleCarSearch yearSelected={yearSelected} makeSelected={makeSelected} modelSelected={modelSelected} />
    </div>
  );
};