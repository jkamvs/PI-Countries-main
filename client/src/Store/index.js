import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users"
import countries from "./slices/countries"

export default configureStore({
  reducer: {
    users,
    countries
  },
});
