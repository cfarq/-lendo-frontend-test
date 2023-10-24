import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { StoreLayout } from "./layouts/Store";

const ListPage = lazy(() => import("./pages/list"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
