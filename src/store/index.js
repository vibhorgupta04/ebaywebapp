import { configureStore } from '@reduxjs/toolkit';

import {
  productReducer,
  category,
  productDetail,
  searchItem,
} from './slices/productSlice.js';
import {
  authenticationReducer,
  isLoggedIn,
} from './slices/authenticationSlice.js';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    product: productReducer,
  },
});

export { store, category, productDetail, searchItem, isLoggedIn };
