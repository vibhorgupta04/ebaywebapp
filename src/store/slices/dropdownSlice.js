import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    chartData: "Line",
  },
  reducers: {
    chartType(state, action) {
      state.chartData = action.payload;
    },
    
  },
});

export const { chartType } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;
