import axios from "axios";

const API = "https://streetsmarts-labs24.herokuapp.com/api";

export const fetchMakeData = () => axios.get(`${API}/make`) ;
export const fetchModelData = (make) => axios.get(`${API}/model?make=${make}`) ;
export const fetchYearData = (make, model) => axios.get(`${API}/year?make=${make}&model=${model}`);

export const fetchSelectedCarDataByYear = async (make, model, year) => {
  let query_params = [];
  if (make) {query_params.push(`make=${make}`)}
  if (model) {query_params.push(`model=${model}`)}
  if (year) {query_params.push(`year=${year}`)}
  let query = "";
  for (let p of query_params) {
    if (query !== "") {
        query += "&";
    }
    query += p;
  }
  return axios.get(`${API}/cars/?${query}`)
};

export const fetchCarDetails = (id) => axios.get(`${API}/cars/${id}`);
export const fetchPrediction = (id) => axios.post(`${API}/predict/${id}`);
