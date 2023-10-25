import { useSelector, shallowEqual } from "react-redux";

import { Page } from "../../components/Page";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductTypes } from "../../types/entities";

export const ProductPage = (): JSX.Element => {
  const selectedItem = (state) => state.selectedItem;

  const product = useSelector(selectedItem, shallowEqual);

  return (
    <Page>
      <ProductDetail product={product.item ? product.item : ""} />
    </Page>
  );
};
