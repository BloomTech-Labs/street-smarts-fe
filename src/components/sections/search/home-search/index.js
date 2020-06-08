import React, { useState, useEffect } from 'react';
import { fetchMakeData, fetchModelData, fetchYearData } from '../../../../hooks/dataFetching';
import { handleMakeChanges, 
        handleModelChanges, 
        handleYearChanges, 
        handleClear, 
        disableOtherDropdown, 
        disableYearDropdown, 
      } from '../../../../hooks/dropdownFunctions';
import Dropdown from '../../../common/dropdown';
import HomeResults from '../../results/home-results';
import CompareResults from '../../results/compare-results';

export default function Search({ searchTitle, id })  {
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
    <>
      <div className='dropdownForm'>
        <p>{searchTitle ? searchTitle : 'Start your search'}</p>
        <Dropdown
          showSearch
          defaultValue='Make'
          onSelect={(selected) => handleMakeChanges(selected, setMakeSelected, setModelDisabled, setYearSelected)}
          onFocus={() => disableOtherDropdown(setModelDisabled, setModelSelected, setYearDisabled)}
          data={carMakes}/>
          
        <Dropdown 
          showSearch
          defaultValue='Model'
          disabled={modelDisabled}
          onSelect={(selected) => handleModelChanges(selected, setModelSelected, setYearDisabled, setYearSelected)}
          onFocus={() => disableYearDropdown(setYearDisabled, setYearSelected)}
          data={carModels}/>
          
        <Dropdown 
          defaultValue='Year'
          disabled={yearDisabled}
          onSelect={(selected) => handleYearChanges(selected, setYearSelected, )}
          onChange={() => handleClear(setYearSelected)}
          data={carYears}/>
      </div>
      { modelSelected ? (
        <HomeResults make = {makeSelected} model = {modelSelected} year = {yearSelected} />)
      : id ? <CompareResults id={id} make = {makeSelected} model = {modelSelected} year = {yearSelected} />
      : <></>
      }
    </>
  );
};
