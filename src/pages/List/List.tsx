import { Page } from "../../components/Page";
import { ProductList } from "../../components/ProductList";
import { Loader } from "../../components/Loader";

import ErrorPage from "../Error";
import { useGetAllProductsQuery } from "../../redux/productsApi";

export const ListPage = (): JSX.Element => {
  const { data, isLoading, error } = useGetAllProductsQuery(null);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Page>{isLoading ? <Loader /> : <ProductList products={data} />}</Page>
  );
};
