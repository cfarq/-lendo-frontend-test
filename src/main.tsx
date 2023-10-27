import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

import cartReducer, { getTotals } from "./redux/cartSlice";
import { productsApi } from "./redux/productsApi";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotals(null));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
