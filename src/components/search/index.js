import React, { useState, useEffect } from "react";
// Refactored this data fetching function into its own folder
import { fetchMakeData, fetchModelData, fetchYearData } from "../../hooks/dataFetching";
import Selection from '../dropdown';
import SingleCarSearch from "../singleCarSearch";

const Dropdown = () => {
  const [carMakes, setCarMakes] = useState([]);
  const [makeSelected, setMakeSelected] = useState("");

  const [carModels, setCarModels] = useState([]);
  const [modelSelected, setModelSelected] = useState("");
  console.log(modelSelected)

  const [carYears, setCarYears] = useState([]);
  const [yearSelected, setYearSelected] = useState("");

  const [modelDisabled, setModelDisabled] = useState(true);
  const [yearDisabled, setYearDisabled] = useState(true);

  const handleMakeChanges = (makeSelected) => {
    setMakeSelected(makeSelected);
    setModelDisabled(false);
    setYearSelected('');
    setYearDisabled(true);
  };

  const handleModelChanges = (modelSelect) => {
    setModelSelected(modelSelect);
    setYearDisabled(false);
    setYearSelected('');
  };

  const handleYearChanges = (yearSelect) => {
    setYearSelected(yearSelect);
  };

  const handleClear = () => {
    setYearSelected('');
  };

  const disableOtherDropdown = () => {
    setModelDisabled(false)
    setYearDisabled(false)
    // setModelSelected('')
  };

  const disableYearDropdown = () => {
    setYearDisabled(false)
    setYearSelected('')
  };

  useEffect(() => {
    fetchMakeData()
      .then((res) => {
        setCarMakes(res.data);
      })
      .catch((err) => {
        console.log("This is error in useEffect for makes", err);
      });
  }, []);

  useEffect(() => {
    if (makeSelected !== "") {
      fetchModelData(makeSelected)
        .then((res) => {
          setCarModels(res.data);
        })
        .catch((err) => {
          console.log("This is error in useEffect for models", err);
        });
    }
  }, [makeSelected]);

  useEffect(() => {
    if (makeSelected && modelSelected !== "") {
      fetchYearData(makeSelected, modelSelected)
        .then((res) => {
          setCarYears(res.data);
        })
        .catch((err) => {
          console.log("This is error in useEffect for years", err);
        });
    }
  }, [makeSelected, modelSelected]);
  
  return (
    <div id='dropdownForm'>
      <Selection 
        showSearch
        onSelect={handleMakeChanges}
        onFocus={disableOtherDropdown}
        data={carMakes}/>
      <Selection 
        showSearch
        disabled={modelDisabled}
        onSelect={handleModelChanges}
        onFocus={disableYearDropdown}
        data={carModels}/>
      <Selection 
        allowClear
        disabled={yearDisabled}
        onSelect={handleYearChanges}
        onFocus={disableOtherDropdown}
        onChange={handleClear}
        data={carYears}/>

      <SingleCarSearch yearSelected={yearSelected} makeSelected={makeSelected} modelSelected={modelSelected} />
    </div>
  );
};

export default Dropdown;