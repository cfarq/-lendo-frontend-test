import toast from "react-hot-toast";
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
    toast.error(`${item.name} removed from cart`);
  };

  const handleQuantityIncrease = (item: CartItemTypes) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart`);
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
        <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
      </div>
      <div>{item.price}</div>
      <div className="flex p-6 rounded-md border border-slate-300 max-w-[120px] justify-around">
        <button
          onClick={() => handleQuantityDecrease(item)}
          className="pl-2 pr-4"
        >
          -
        </button>{" "}
        <div>{item.cartQuantity}</div>
        <button
          onClick={() => handleQuantityIncrease(item)}
          className="pl-4 pr-2"
        >
          +
        </button>
      </div>
      <div>{parseInt(item.price) * item.cartQuantity} kr</div>
    </div>
  );
};
