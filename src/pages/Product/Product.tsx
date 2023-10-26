import { Page } from "../../components/Page";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductTypes } from "../../types/entities";

import { Loader } from "../../components/Loader";
import { useGetProductQuery } from "../../redux/productsApi";

export const ProductPage = (): JSX.Element => {
  const productId = window.location.pathname.split("/")[2];

  const { data, isLoading, error } = useGetProductQuery(productId);

  return (
    <Page>{isLoading ? <Loader /> : <ProductDetail product={data} />}</Page>
  );
};
