import React, { useState, useEffect } from "react";
import axios from "axios";

import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;



const fetchModelData = async (selection) => {
  return await axios.get(
    `https://streetsmarts-labs24.herokuapp.com/api/model?make=${selection}`
  );
};

// const fetchYearData = async (selection) => {
//   await axios.get(
//     `https://streetsmarts-labs24.herokuapp.com/api/year?model=${selection}`
//   );
// };

const Dropdown = () => {
  const [carMakes, setCarMakes] = useState([]);
  const [makeSelected, setMakeSelected] = useState("");

  const [carModels, setCarModels] = useState([]);
  // const [modelSelected, setModelSelected] = useState("");

  // const [carYears, setCarYears] = useState([]);
  // const [yearSelected, setYearSelected] = useState('');

  console.log("This is carMakes state", carMakes);
  console.log("This is carModels state", carModels);
  // console.log("this is carYears state", carYears);

  const handleMakeChanges = (selected) => {
    console.log("makeSelect", selected);
    setMakeSelected(selected);
  };

  const handleModelChanges = (modelSelect) => {
    console.log(modelSelect);
  };

  useEffect(() => {
    axios
      .get(`https://streetsmarts-labs24.herokuapp.com/api/make`)
      .then((res) => {
        console.log("useEffect res for makes", res);
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
          console.log("useEffect response for models", res);
          setCarModels(res.data);
        })
        .catch((err) => {
          console.log("This is error in useEffect for models", err);
        });
    }
  }, [makeSelected]);

  // useEffect(async() => {
  //   const response = await fetch(`https://streetsmarts-labs24.herokuapp.com/api/year?model=${makeSelected}`);
  //   const data = await response.json();
  //   console.log('data');
  // }, [])
  return (
    <>
      <Select
        defaultValue="Make"
        style={{ width: 120 }}
        onSelect={handleMakeChanges}>
          {carMakes.map((maker) => (
            <Option key={maker.make} value={maker.make}>{maker.make}</Option>
          ))}
      </Select>

      <Select

        defaultValue="Model"
        style={{ width: 120 }}
        onSelect={handleModelChanges}>
          {carModels.map((modeler) => (
            <Option key={modeler.model} value={modeler.model}>{modeler.model}</Option>
          ))}
      </Select>

      {/* <Select
        defaultValue="Year"
        style={{ width: 120 }}
        onSelect={handleChangeYear}>
          {yearS.map((yearer) => (
            <Option key={yearer.year} value={yearer.year}>{yearer.year}</Option>
          ))}
      </Select> */}
    </>
  );
};

export default Dropdown;