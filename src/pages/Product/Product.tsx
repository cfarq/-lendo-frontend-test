import { useSelector, shallowEqual } from "react-redux";

import { Page } from "../../components/Page";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductTypes } from "../../types/entities";

import { useGetProductQuery } from "../../redux/productsApi";

export const ProductPage = (): JSX.Element => {
  const productId = window.location.pathname.split("/")[2];

  const { data, isLoading, error } = useGetProductQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Page>
      <ProductDetail product={data} />
    </Page>
  );
};
