import { configureStore } from "@reduxjs/toolkit";

import {
  dropdownReducer,
} from "./slices/dropdownSlice";


const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});

export {
  store,
  
};
