import { Link } from "react-router-dom";

import { ProductTypes } from "../../types/entities";

interface ProductListItemProps {
  product: ProductTypes;
}

export const ProductListItem = ({
  product,
}: ProductListItemProps): JSX.Element => {
  return (
    <Link to={`/product/${product.id}`} className="relative">
      <div
        className={`w-full bg-white overflow-hidden rounded-md p-5 h-full shadow-lg hover:bg-blue-50 flex flex-col justify-center ${
          !product.available ? "opacity-60" : ""
        }`}
      >
        <div className="font-bold">{product.name}</div>
        <div>{product.price} kr</div>
        {!product.available ? (
          <div className="text-red-500">Currently unavailable</div>
        ) : null}
      </div>
    </Link>
  );
};
