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

export const fetchSelectedCarDataByYear = async (make, model, year, setResults, setCompareResults) => {
  let query_params = [];
  if (make) {
      query_params.push(`make=${make}`);
  }
  if (model) {
      query_params.push(`model=${model}`);
  }
  if (year) {
      query_params.push(`year=${year}`);
  }
  let query = "";
  for (let p of query_params) {
      if (query !== "") {
          query += "&";
      }
      query += p;
  }
  return await axios
    .get(`https://streetsmarts-labs24.herokuapp.com/api/cars/?${query}`)
    .then((res) => {
      setCompareResults ? 
        setCompareResults(res.data)
        : setResults(res.data) 
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

const API = "https://streetsmarts-labs24.herokuapp.com/api";

export const fetchPrediction = async (id, setPredictionValue) => {
  return await axios
    .post(`${API}/predict/${id}`)
    .then((res) => {
      console.log(`This is response for fetchPredictionPrice of ${id}`, res.data);
      setPredictionValue(res.data);
    })
    .catch((err) => {
      console.log(`Error fetching price prediction for ${id}: ${err}`);
      return err.message;
    });
};
