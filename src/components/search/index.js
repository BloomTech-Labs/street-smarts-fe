import React, { useState, useEffect } from "react";
import { fetchMakeData, fetchModelData, fetchYearData } from "../../hooks/dataFetching";
import { handleMakeChanges, handleModelChanges, handleYearChanges, handleClear, disableOtherDropdown, disableYearDropdown } from '../../hooks/dropdownFunctions';
import styled from 'styled-components';

import Selection from '../dropdown';
import SingleCarSearch from "../buttons/singleCarSearch";

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
        onFocus={() => disableOtherDropdown(setModelDisabled, setModelSelected, setYearDisabled)}
        data={carMakes}/>
        
        
      <Selection 
        showSearch
        defaultValue='Model'
        disabled={modelDisabled}
        onSelect={(selected) => handleModelChanges(selected, setModelSelected, setYearDisabled, setYearSelected)}
        onFocus={() => disableYearDropdown(setYearDisabled, setYearSelected)}
        data={carModels}/>
        
        
      <Selection 
        allowClear
        defaultValue='Year'
        disabled={yearDisabled}
        onSelect={(selected) => handleYearChanges(selected, setYearSelected)}
        onChange={() => handleClear(setYearSelected)}
        data={carYears}/>
        
      <SingleCarSearch yearSelected={yearSelected} makeSelected={makeSelected} modelSelected={modelSelected} />
    </div>
    </Menu>
  );
};