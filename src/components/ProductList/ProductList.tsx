import { ProductListItem } from "../ProductListItem/ProductListItem";

import { ProductTypes } from "../../types/entities";

interface ProductListProps {
  products: ProductTypes[];
}

export const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <div>
      {products.map((product: ProductTypes) => {
        return <ProductListItem product={product} />;
      })}
    </div>
  );
};
