import { createSlice } from "@reduxjs/toolkit";

export const countrieSlice = createSlice({
  name: "countries",
  initialState: {
    All_Countries: [],
  },
  reducers: {
    setCountriesAll: (state, action) => {
      state.All_Countries = action.payload;
    },
  },
});
export const { setCountriesAll } = countrieSlice.actions;
export default countrieSlice.reducer;
