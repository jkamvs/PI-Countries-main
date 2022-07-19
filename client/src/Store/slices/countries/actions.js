import axios from "axios";
import { setCountriesAll } from "./reducer";

export const fetchAllCountries = () => (dispatch) => {
  axios
    .get("http://localhost:3001/countries")
    .then((item) => {
      dispatch(setCountriesAll(item.data));
    })
    .catch((err) => console.log(err));
};
