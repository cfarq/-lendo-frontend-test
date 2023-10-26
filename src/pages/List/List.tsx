import { Page } from "../../components/Page";
import { ProductList } from "../../components/ProductList";
import { Loader } from "../../components/Loader";

import { useGetAllProductsQuery } from "../../redux/productsApi";

export const ListPage = (): JSX.Element => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <Page>
      <Loader />
      {isLoading ? <div>Loading...</div> : <ProductList products={data} />}
    </Page>
  );
};
