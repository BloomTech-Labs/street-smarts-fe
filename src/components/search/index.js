import React, { useState, useEffect } from "react";
// import axios from "axios";
import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;

const Dropdown = () => {
  const [make, setMake] = useState({});
  const [makeS, setMakeS] = useState([]);
  const [model, setModel] = useState({});
  const [modelS, setModelS] = useState([]);
  const [year, setYear] = useState({});
  const [yearS, setYearS] = useState([]);


  useEffect(async() => {
    const response = await fetch('https://streetsmarts-labs24.herokuapp.com/api/make');
    const json = await response.json();
    setMakeS(json);
  }, []);
  useEffect(async() => {
    const response = await fetch(`https://streetsmarts-labs24.herokuapp.com/api/model?make=${model}`);
    const json = await response.json();
    setModelS(json);
  }, [make]);
  useEffect(async() => {
    const response = await fetch(`https://streetsmarts-labs24.herokuapp.com/api/year?model=${year}`);
    const json = await response.json();
    setYearS(json);
  }, [model]);
  
  const click = e => {
    e.preventDefault();
  }

  // const handleChangeMake = e => {
  //   setMake(e.target);
  //   console.log('EVENT', e.target)


  // const handleChangeModel = e => {
  //   setModel(e.target.value);
  // }
  
  // const handleChangeYear = e => {
  //   setYear(e.target.value);
  // }

  return (
    <>
      <form onClick={click}>
      <Select
        id="make"
        defaultValue="Make"
        value={make}
        style={{ width: 120 }}
        onSelect={handleChangeMake}>
          {makeS.map((maker) => (
            <Option key={maker.make} value={maker.make}>{maker.make}</Option>
          ))}
      </Select>

      <Select
        id="model"
        defaultValue="Model"
        value={model}
        style={{ width: 120 }}
        onSelect={handleChangeModel}>
          {modelS.map((modeler) => (
            <Option key={modeler.model} value={modeler.model}>{modeler.model}</Option>
          ))}
      </Select>

      <Select
        id="year"
        defaultValue="Year"
        value={year}
        style={{ width: 120 }}
        onSelect={handleChangeYear}>
          {yearS.map((yearer) => (
            <Option key={yearer.year} value={yearer.year}>{yearer.year}</Option>
          ))}
      </Select>
      </form>
    </>
  );
};

export default Dropdown;