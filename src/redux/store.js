import { combineReducers, createStore, compose } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cart.reducers";

export const rootReducer = combineReducers({
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
