import { createSlice } from "@reduxjs/toolkit";

export const countrieSlice = createSlice({
  name: "countries",
  initialState: {
    Copy_Countries: [],
    All_Countries: [],
  },
  reducers: {
    setCountriesAll: (state, action) => {
      state.All_Countries = action.payload;
      state.Copy_Countries = action.payload;
    },
    setSearchCountries: (state, action) => {
      state.All_Countries = action.payload;
    },
  },
});
export const { setCountriesAll, setSearchCountries } = countrieSlice.actions;
export default countrieSlice.reducer;
