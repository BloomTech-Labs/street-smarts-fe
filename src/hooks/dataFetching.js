import axios from "axios";

export const fetchMakeData = async(setCarMakes) => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/make`)
    .then(({data}) => {
      setCarMakes(data);
    })
    .catch((err) => {
      return err.message;
    });
};

export const fetchModelData = async (make, setCarModels) => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/model?make=${make}`)
    .then((res) => {
      setCarModels(res.data);
    })
    .catch((err) => {
      return err.message;
    });
};

export const fetchYearData = async (make, model, setCarYears) => {
  return await axios.get(`https://streetsmarts-labs24.herokuapp.com/api/year?make=${make}&model=${model}`)
    .then((res) => {
      setCarYears(res.data);
    })
    .catch((err) => {
      console.log("This is error in useEffect for years", err);
    });
}

export const fetchSelectedCarDataByYear = async (make, model, year) => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/cars/?year=${year}&make=${make}&model=${model}`)
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
