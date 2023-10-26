import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { PageHeader } from "./components/Page";

const ListPage = lazy(() => import("./pages/List"));
const ProductPage = lazy(() => import("./pages/Product"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));

import { useGetAllProductsQuery } from "./redux/productsApi";

function App() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      <PageHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
