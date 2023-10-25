import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { StoreLayout } from "./layouts/Store";

const ListPage = lazy(() => import("./pages/List"));
const ProductPage = lazy(() => import("./pages/Product"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<ListPage />} />
          <Route path="product/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
