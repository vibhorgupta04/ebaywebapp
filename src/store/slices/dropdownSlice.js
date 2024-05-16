import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    chartData: "Line",
    apiData: 1,
  },
  reducers: {
    chartType(state, action) {
      state.chartData = action.payload;
    },
    data(state, action) { 
      state.apiData = action.payload;
    }
    
  },
});

export const { chartType, data } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;
