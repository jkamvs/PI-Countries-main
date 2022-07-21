import axios from "axios";
import { setCountriesAll, setSearchCountries } from "./reducer";

export const fetchAllCountries = () => (dispatch) => {
  axios
    .get("/countries")
    .then((item) => {
      dispatch(setCountriesAll(item.data));
    })
    .catch((err) => console.log(err));
};

export const fetchSearchCountries = (data) => (dispatch) => {
  axios
    .get(`/countries?name=${data}`)
    .then((item) => {
      dispatch(setSearchCountries(item.data));
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
};
