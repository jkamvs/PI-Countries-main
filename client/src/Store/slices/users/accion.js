import axios from "axios";
import { setUsersList } from "./reducer";

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((item) => {
      dispatch(setUsersList(item.data.data));
    })
    .catch((err) => console.log(err));
};
