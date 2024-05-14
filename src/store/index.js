import { configureStore } from "@reduxjs/toolkit";

import {
  dropdownReducer,
  data
} from "./slices/dropdownSlice";
import {
  productReducer,
  category
} from "./slices/productSlice.js";


const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    product: productReducer,
  },
});

export {
  store,
  data,
  category
};
