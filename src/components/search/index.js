import React, { useState, useEffect } from 'react';
import { fetchMakeData, fetchModelData, fetchYearData } from '../../hooks/dataFetching';
import { handleMakeChanges, 
        handleModelChanges, 
        handleYearChanges, 
        handleClear, 
        disableOtherDropdown, 
        disableYearDropdown, 
      } from '../../hooks/dropdownFunctions';
import Dropdown from '../dropdown';
import HomeResults from '../results/home-results';

export default function Search ({ searchTitle, Results, id, setMake, setModel, setYear, make, model, year })  {

  const [carMakes, setCarMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carYears, setCarYears] = useState([]);

  const [modelDisabled, setModelDisabled] = useState(true);
  const [yearDisabled, setYearDisabled] = useState(true);

// WHAT LIST IS SHOWING
// Handles Make Dropdown state
  useEffect(() => {
    fetchMakeData(setCarMakes);
  }, []);

// Handles Model Dropdown state
  useEffect(() => {
    if (make !== "") {
      fetchModelData(make, setCarModels)
    }
  }, [make]);
  
// Handles Year Dropdown state
  useEffect(() => {
    if (make && model !== "") {
      fetchYearData(make, model, setCarYears)
    }
  }, [make, model]);

  return (
    <>
      <div className='dropdownForm'>
        <p>{searchTitle ? searchTitle : 'Start your search'}</p>
        <Dropdown
          showSearch
          defaultValue='Make'
          onSelect={(selected) => handleMakeChanges(selected, setMake, setModelDisabled, setYear)}
          onFocus={() => disableOtherDropdown(setModelDisabled, setModel, setYearDisabled)}
          data={carMakes}/>
          
        <Dropdown 
          showSearch
          defaultValue='Model'
          disabled={modelDisabled}
          onSelect={(selected) => handleModelChanges(selected, setModel, setYearDisabled, setYear)}
          onFocus={() => disableYearDropdown(setYearDisabled, setYear)}
          data={carModels}/>
          
        <Dropdown
          showSearch
          defaultValue='Year'
          disabled={yearDisabled}
          onSelect={(selected) => handleYearChanges(selected, setYear, )}
          onChange={() => handleClear(setYear)}
          data={carYears}/>
      </div>
    </>
  );
};
