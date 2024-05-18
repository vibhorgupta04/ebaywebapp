import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    categorySlug: '',
    productItem: 'dsadas',
    title: ''
  },
  reducers: {
    category(state, action) {
      state.categorySlug = action.payload;
    },
    productDetail(state, action) {
      state.productItem = action.payload;
    },
    searchItem(state, action) {
      state.title = action.payload;
    },
  },
});

export const { chartType, category, productDetail, searchItem } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
