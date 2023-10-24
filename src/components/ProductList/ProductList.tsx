import { ProductListItem } from "../ProductListItem/ProductListItem";

import { ProductTypes } from "../../types/entities";

interface ProductListProps {
  products: ProductTypes[];
}

export const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-4 px-10">
      {products.map((product: ProductTypes) => {
        return <ProductListItem key={product.id} product={product} />;
      })}
    </div>
  );
};
