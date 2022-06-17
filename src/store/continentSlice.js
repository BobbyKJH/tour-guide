import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    asia: (state) => {
      state.value = "";
    },
    eu: (state) => {
      state.value = "";
    },
    america: (state) => {
      state.value = "";
    },
    africa: (state) => {
      state.value = "";
    },
    oceania: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = countrySlice.actions;

export default countrySlice.reducer;
