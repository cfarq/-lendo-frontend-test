import { ProductTypes } from "../../types/entities";

interface ProductListItemProps {
  product: ProductTypes;
}

export const ProductListItem = ({
  product,
}: ProductListItemProps): JSX.Element => {
  return (
    <div
      className={`w-full bg-white overflow-hidden rounded-md p-5 shadow-lg hover:bg-blue-50 ${
        !product.available ? "opacity-60" : ""
      }`}
    >
      <div className="font-bold">{product.name}</div>
      {product.available ? (
        <div className="">{product.price} kr</div>
      ) : (
        <div className="text-red-600">Currently out of stock</div>
      )}
    </div>
  );
};
