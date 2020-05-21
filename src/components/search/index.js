import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Refactored this data fetching function into its own folder
import { fetchMakeData, fetchModelData } from "../../hooks/dataFetching";

import "antd/dist/antd.css";

import { Select } from "antd";
const { Option } = Select;

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

      <Link to={`/${makeSelected}/${modelSelected}`}>
        <div className="button">
          <p>Submit</p>
        </div>
      </Link>
    </>
  );
};

export default Dropdown;
