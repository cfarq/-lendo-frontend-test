import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ProductTypes } from "../../types/entities";

interface ProductListItemProps {
  product: ProductTypes;
}

export const ProductListItem = ({
  product,
}: ProductListItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "selectedItem/CLEAR_SELECTED_ITEM" });
    dispatch({ type: "selectedItem/SELECT_ITEM", payload: product });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      onClick={() => handleClick()}
      className="relative"
    >
      <div
        className={`w-full bg-white overflow-hidden rounded-md p-5 h-full shadow-lg hover:bg-blue-50 flex flex-col justify-center ${
          !product.available ? "opacity-60" : ""
        }`}
      >
        <div className="font-bold">{product.name}</div>
        <div>{product.price} kr</div>
        {!product.available ? (
          <div className="text-red-500">Out of stock</div>
        ) : null}
      </div>
    </Link>
  );
};
