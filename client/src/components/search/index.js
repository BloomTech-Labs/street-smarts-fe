import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;

const Dropdown = () => {
  const [make, setMake] = useState({});
  const [model, setModel] = useState({});
  const [year, setYear] = useState({});

  useEffect(async() => {
    const response = await fetch('https://streetsmarts-labs24.herokuapp.com/api/make');
    const json = await response.json();
    setMake(json);
    onSelect(model(active))
  })
  useEffect(async() => {
    const response = await fetch(`https://streetsmarts-labs24.herokuapp.com/api/model?make=${model}`);
    const json = await response.json();
    setModel(json);
    onSelect(year(active))
  })
  useEffect(async() => {
    const response = await fetch(`https://streetsmarts-labs24.herokuapp.com/api/year?model=${year}`);
    const json = await response.json();
    setYear(json);
  })
  const click = e => {
    e.preventDefault();
  }


  
  

  handleChangeMake = e => {
    setMake(e.target.value);
  }

  handleChangeModel = e => {
    setModel(e.target.value);
  }
  
  handleChangeYear = e => {
    setYear(e.target.value);
  }

  return (
    <>
      <Form onClick={click}>
      <Select
        id="make"
        defaultValue="Make"
        value={make}
        style={{ width: 120 }}
        onChange={handleChangeMake}>
          {make.map((maker) => (
            <Option key={maker.make} value={make.maker}>{maker.make}</Option>
          ))}
      </Select>

      <Select
        id="model"
        defaultValue="Model"
        // value={model}
        style={{ width: 120 }}
        // onChange={handleChangeModel}
        >
          {/* {model.map((models) => (
            <Option >{models}</Option>
          ))} */}
      </Select>
      </Form>
    </>
  );
};

export default Dropdown;