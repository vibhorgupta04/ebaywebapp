import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    categorySlug: '',
    productItem: 'dsadas',
  },
  reducers: {
    category(state, action) {
      state.categorySlug = action.payload;
    },
    productDetail(state, action) {
      state.productItem = action.payload;
    },
  },
});

export const { chartType, category, productDetail } = productSlice.actions;
export const productReducer = productSlice.reducer;
