import toast from "react-hot-toast";
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
    <div className="grid grid-cols-5 py-5 border-b border-b-slate-400">
      <div className="flex flex-col">
        <span>{item.name}</span>
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
        <div>{item.cartQuantity}</div>{" "}
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
