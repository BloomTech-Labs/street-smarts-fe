import axios from "axios";

export const fetchMakeData = async() => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/make`)
};

export const fetchModelData = async (selection) => {
  return await axios.get(
    `https://streetsmarts-labs24.herokuapp.com/api/model?make=${selection}`
  );
};

export const fetchSelectedCarData = async (make, model) => {
  return await axios.get(
    `https://streetsmarts-labs24.herokuapp.com/api/cars/?make=${make}&model=${model}`
  );
};

export const fetchCarDetails = async (id) => {
  return await axios.get(
    `https://streetsmarts-labs24.herokuapp.com/api/cars/${id}`
  );
};
