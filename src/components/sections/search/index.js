import React, { useState, useEffect } from 'react';
import { fetchMakeData, fetchModelData, fetchYearData } from '../../../hooks/dataFetching';
import { handleMakeChanges, 
        handleModelChanges, 
        handleYearChanges, 
        handleClear, 
        disableOtherDropdown, 
        disableYearDropdown, 
        } from '../../../hooks/dropdownFunctions';
import Dropdown from '../../common/dropdown';
import Results from '../results';

export default function Search({ searchTitle, getUrlWithId, resultsClass, searchClass })  {
  const [carMakes, setCarMakes] = useState([]);
  const [makeSelected, setMakeSelected] = useState("");

  const [carModels, setCarModels] = useState([]);
  const [modelSelected, setModelSelected] = useState("");

  const [carYears, setCarYears] = useState([]);
  const [yearSelected, setYearSelected] = useState("");

  const [modelDisabled, setModelDisabled] = useState(true);
  const [yearDisabled, setYearDisabled] = useState(true);

// WHAT LIST IS SHOWING
// Handles Make Dropdown state
  useEffect(() => {
    fetchMakeData().then(res => setCarMakes(res.data));
  }, []);

// Handles Model Dropdown state
  useEffect(() => {
    if (makeSelected !== "") {
      fetchModelData(makeSelected).then(res => setCarModels(res.data))
    }
  }, [makeSelected]);
  
// Handles Year Dropdown state
  useEffect(() => {
    if (makeSelected && modelSelected !== "") {
      fetchYearData(makeSelected, modelSelected).then(res => setCarYears(res.data))
    }
  }, [makeSelected, modelSelected]);

  return (
    <>
      <div className={`'dropdownForm' ${searchClass}`}>
        <p>{searchTitle ? searchTitle : 'Start your search'}</p>
        <Dropdown
          showSearch
          defaultValue='Make'
          onSelect={(selected) => handleMakeChanges(selected, setMakeSelected, setModelDisabled, setYearSelected)}
          onFocus={() => disableOtherDropdown(setModelDisabled, setModelSelected, setYearDisabled)}
          data={carMakes} />
          
        <Dropdown 
          showSearch
          defaultValue='Model'
          disabled={modelDisabled}
          onSelect={(selected) => handleModelChanges(selected, setModelSelected, setYearDisabled, setYearSelected)}
          onFocus={() => disableYearDropdown(setYearDisabled, setYearSelected)}
          data={carModels} />
          
        <Dropdown 
          defaultValue='Year'
          disabled={yearDisabled}
          onSelect={(selected) => handleYearChanges(selected, setYearSelected, )}
          onChange={() => handleClear(setYearSelected)}
          data={carYears} />
      </div>

      { yearSelected ? (
        <Results make = {makeSelected} model = {modelSelected} year = {yearSelected} getUrlWithId={getUrlWithId} resultsClass = {resultsClass}  />)
      : <></>}
    </>
  );
};
