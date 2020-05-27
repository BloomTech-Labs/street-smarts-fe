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

export const fetchSelectedCarDataByYear = async (make, model, year, setResults) => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/cars/?year=${year}&make=${make}&model=${model}`)
    .then((res) => {
      setResults(res.data);
    })
    .catch((err) => {
      return err.message;
    });
};

export const fetchSelectedCarData = async (make, model, setResults) => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/cars/?make=${make}&model=${model}`)
    .then((res) => {
      setResults(res.data);
    })
    .catch((err) => {
      return err.message;
    });
};

export const fetchCarDetails = async (id, setCar) => {
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/cars/${id}`)
    .then((res) => {
      console.log(`This is response for fetchCarDetails of ${res.data.year} ${res.data.make} ${res.data.model}`, res);
      setCar(res.data);
    })
    .catch((err) => {
      return err.message;
    });
};
