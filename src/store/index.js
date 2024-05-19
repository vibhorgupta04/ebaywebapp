import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice.js";
import {
  dropdownReducer,
  data
} from "./slices/dropdownSlice";
import {
  productReducer,
  category,
  productDetail
} from "./slices/productSlice.js";


const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    product: productReducer,
    allCart: cartReducer,
  },
});

export {
  store,
  data,
  category,
  productDetail
};
