import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cart.reducers";
import { selectedItemReducer } from "./selectedItem.reducers";

export const rootReducer = combineReducers({
  cart: cartReducer,
  selectedItem: selectedItemReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
