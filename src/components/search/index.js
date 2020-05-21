import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;

const fetchModelData = async (selection) => {
  return await axios.get(
    `https://streetsmarts-labs24.herokuapp.com/api/model?make=${selection}`
  );
};

const Dropdown = () => {
  const [carMakes, setCarMakes] = useState([]);
  const [makeSelected, setMakeSelected] = useState("");

  const [carModels, setCarModels] = useState([]);
  const [modelSelected, setModelSelected] = useState("");

  const handleMakeChanges = (selected) => {
    setMakeSelected(selected);
  };

  const handleModelChanges = (modelSelect) => {
    setModelSelected(modelSelect);
  };

  const onSearch = (userInput) => {
    return userInput;
  };

  useEffect(() => {
    axios
      .get(`https://streetsmarts-labs24.herokuapp.com/api/make`)
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

  return (
    <>
      <Select
        showSearch
        defaultValue="Make"
        style={{ width: 120 }}
        onSelect={handleMakeChanges}
        onSearch={onSearch}
        optionFilterProp="children"
        filterOption={(input, option) => {
          return (
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        }}
      >
        {carMakes.map((maker) => (
          <Option key={maker.make} value={maker.make}>
            {maker.make}
          </Option>
        ))}
      </Select>

      <Select
        showSearch
        defaultValue="Model"
        style={{ width: 250 }}
        onSelect={handleModelChanges}
        onSearch={onSearch}
        optionFilterProp="children"
        filterOption={(input, option) => {
          return (
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        }}
      >
        {carModels.map((modeler) => (
          <Option key={modeler.model} value={modeler.model}>
            {modeler.model}
          </Option>
        ))}
      </Select>

      <Link to={`/${makeSelected}/${modelSelected}`} >
        <div className="button">
          <p>Submit</p>
        </div>
      </Link>
    </>
  );
};

export default Dropdown;
