import { Link } from "react-router-dom";
import {
  decreaseCartQuantity,
  removeFromCart,
  addToCart,
} from "../../redux/cartSlice";
import { CartItemTypes } from "../../types/entities";
import { useDispatch } from "react-redux";

interface CheckoutItemProps {
  item: CartItemTypes;
}

export const CheckoutItem = ({ item }: CheckoutItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item: CartItemTypes) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityIncrease = (item: CartItemTypes) => {
    dispatch(addToCart(item));
  };

  const handleQuantityDecrease = (item: CartItemTypes) => {
    dispatch(decreaseCartQuantity(item));
  };

  return (
    <div className="grid grid-cols-4 py-5 border-b border-b-slate-400">
      <div className="flex flex-col">
        <div>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </div>
        <div className="space-x-2 text-sm text-gray-600">
          <span className="capitalize">{item.variantDetails.color}</span>
          {item.variantDetails.power ? (
            <span>{item.variantDetails.power}W</span>
          ) : null}
          {item.variantDetails.storage ? (
            <span>{item.variantDetails.storage}GB</span>
          ) : null}
        </div>
        <button
          className="inline-block"
          onClick={() => handleRemoveFromCart(item)}
        >
          Remove
        </button>
      </div>
      <div>{item.price} kr</div>
      <div className="flex p-6 rounded-md border border-slate-400 max-w-[120px] justify-around">
        <button
          onClick={() => handleQuantityDecrease(item)}
          className="pl-2 pr-4"
        >
          -
        </button>
        <div>{item.cartQuantity}</div>
        <button
          disabled={item.cartQuantity >= item.variantDetails.quantity}
          onClick={() => handleQuantityIncrease(item)}
          className="pl-4 pr-2 disabled:opacity-50"
        >
          +
        </button>
      </div>
      <div className="flex justify-end">
        {parseInt(item.price) * item.cartQuantity} kr
      </div>
    </div>
  );
};
