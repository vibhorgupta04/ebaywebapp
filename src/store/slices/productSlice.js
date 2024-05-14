import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    categorySlug: '',
  },
  reducers: {
    category(state, action) {
      state.categorySlug = action.payload;
    },
  },
});

export const { chartType, category } = productSlice.actions;
export const productReducer = productSlice.reducer;
