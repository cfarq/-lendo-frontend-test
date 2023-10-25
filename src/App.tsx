import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageHeader } from "./components/Page";

const ListPage = lazy(() => import("./pages/List"));
const ProductPage = lazy(() => import("./pages/Product"));

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
