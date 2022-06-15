import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "https://bobbykjh.github.io/json/asia.json",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    asia: (state) => {
      state.value = "https://bobbykjh.github.io/json/asia.json";
    },
    eu: (state) => {
      state.value = "https://bobbykjh.github.io/json/eu.json";
    },
    america: (state) => {
      state.value = "https://bobbykjh.github.io/json/america.json";
    },
    africa: (state) => {
      state.value = "https://bobbykjh.github.io/json/africa.json";
    },
    oceania: (state) => {
      state.value = "https://bobbykjh.github.io/json/oceania.json";
    },
  },
});

// Action creators are generated for each case reducer function
export const { asia, eu, america, africa, oceania } = countrySlice.actions;

export default countrySlice.reducer;
