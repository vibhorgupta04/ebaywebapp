import { configureStore } from "@reduxjs/toolkit";

import {
  productReducer,
  category,
  productDetail,
  searchItem
} from "./slices/productSlice.js";


const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export {
  store,
  category,
  productDetail,
  searchItem
};
