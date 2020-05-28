import React, { useState, useEffect } from "react";
import { fetchMakeData, fetchModelData, fetchYearData } from "../../hooks/dataFetching";
import styled from 'styled-components';
import { handleMakeChanges, handleModelChanges, handleYearChanges, handleSubModelClick, handleClear, disableOtherDropdown, disableYearDropdown, disableSubModel } from '../../hooks/dropdownFunctions';

import Selection from '../dropdown';
import Results from '../results';

const Menu = styled.div`
  .dropdownForm{
    width: 400px;
    margin-top: 2%;
    margin-left: 20%;
   }`;
 
const Title = styled.h1`
    margin-top: 10%;
    margin-left: 20%;
`

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
    <Menu>
      <Title>What car will you drive next?</Title>
      <div className='dropdownForm'>
      
        <Selection
          showSearch
          defaultValue='Make'
          onSelect={(selected) => handleMakeChanges(selected, setMakeSelected, setModelDisabled, setYearSelected)}
          onFocus={() => disableOtherDropdown(setModelDisabled, setModelSelected, setYearDisabled, setSubModelDisabled, setIsSubModelSelected)}
          data={carMakes}/>
          
          
        <Selection 
          showSearch
          defaultValue='Model'
          disabled={modelDisabled}
          onSelect={(selected) => handleModelChanges(selected, setModelSelected, setYearDisabled, setYearSelected)}
          onFocus={() => disableYearDropdown(setYearDisabled, setYearSelected, setSubModelDisabled, setIsSubModelSelected)}
          data={carModels}/>
          
          
        <Selection 
          defaultValue='Year'
          disabled={yearDisabled}
          onSelect={(selected) => handleYearChanges(selected, setYearSelected, setSubModelDisabled)}
          onChange={() => handleClear(setYearSelected)}
          onFocus={() => disableSubModel(setIsSubModelSelected, setSubModelDisabled)}
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
    </div>
    </Menu>
  );
};