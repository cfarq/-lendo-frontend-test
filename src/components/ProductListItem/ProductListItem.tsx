import { ProductTypes } from "../../types/entities";

interface ProductListItemProps {
  product: ProductTypes;
}

export const ProductListItem = ({
  product,
}: ProductListItemProps): JSX.Element => {
  return (
    <div
      className={`w-full bg-white overflow-hidden rounded-md p-5 shadow-lg ${
        !product.available ? "opacity-50" : ""
      }`}
    >
      <div className="font-bold">{product.name}</div>
      <div className="">{product.price} kr</div>
    </div>
  );
};
