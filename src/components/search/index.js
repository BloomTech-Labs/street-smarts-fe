import React, { useState, useEffect } from 'react';
import { fetchMakeData, fetchModelData, fetchYearData } from '../../hooks/dataFetching';
import { handleMakeChanges, 
        handleModelChanges, 
        handleYearChanges, 
        handleSubModelClick, 
        handleClear, 
        disableOtherDropdown, 
        disableYearDropdown, 
        disableSubModel } from '../../hooks/dropdownFunctions';
import Dropdown from '../dropdown';
import Results from '../results';
import SearchStyled from './styles';

export default function Search()  {
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
    <SearchStyled>
      <div className='hero'>
        <div className='heroText'>
          <h1>What car will you drive next?</h1>
          <p>Compare cost, features and CO<sub>2</sub> emissions—all in one place.</p>
        </div>
      <div className='dropdownForm'>
        <p>Start your search</p>
        <Dropdown
          showSearch
          defaultValue='Make'
          onSelect={(selected) => handleMakeChanges(selected, setMakeSelected, setModelDisabled, setYearSelected)}
          onFocus={() => disableOtherDropdown(setModelDisabled, setModelSelected, setYearDisabled, setSubModelDisabled, setIsSubModelSelected)}
          data={carMakes}/>
          
        <Dropdown 
          showSearch
          defaultValue='Model'
          disabled={modelDisabled}
          onSelect={(selected) => handleModelChanges(selected, setModelSelected, setYearDisabled, setYearSelected)}
          onFocus={() => disableYearDropdown(setYearDisabled, setYearSelected, setSubModelDisabled, setIsSubModelSelected)}
          data={carModels}/>
          
        <Dropdown 
          defaultValue='Year'
          disabled={yearDisabled}
          onSelect={(selected) => handleYearChanges(selected, setYearSelected, setSubModelDisabled)}
          onChange={() => handleClear(setYearSelected)}
          onFocus={() => disableSubModel(setIsSubModelSelected, setSubModelDisabled)}
          data={carYears}/>
      </div>
      </div>
      { modelSelected ?(
      <Results make = {makeSelected} model = {modelSelected} year = {yearSelected} setSubModel = {setSubModel} setIsSubModelSelected={setIsSubModelSelected} />)
      : <></>}
    </SearchStyled>
  );
};
