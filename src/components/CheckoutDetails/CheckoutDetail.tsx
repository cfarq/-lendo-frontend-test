import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { CheckoutItem } from "./CheckoutItem";
import { CartItemTypes } from "../../types/entities";
import { clearCart, getTotals } from "../../redux/cartSlice";
import toast from "react-hot-toast";

export const CheckoutDetails = ({}): JSX.Element => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleClearCartClick = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  return (
    <div className="mt-24 px-10">
      <div>
        <div className="mb-6">
          <Link className="flex" to="/">
            <ArrowCircleLeft size={32} />
            <span className="flex flex-col justify-center pl-2">
              Back to all products
            </span>
          </Link>
        </div>
        <div className="text-2xl font-bold mb-6">Checkout</div>
        {cart.cartItems.length === 0 ? (
          <div className="text-xl">Your cart is empty</div>
        ) : (
          <>
            <div className="grid grid-cols-4 border-b border-b-slate-400 py-5">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {cart.cartItems?.map((cartItem: CartItemTypes) => {
                return (
                  <CheckoutItem key={cartItem.variantId} item={cartItem} />
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between">
        <div>
          {cart.cartItems.length ? (
            <Button onClick={() => handleClearCartClick()} variant="contained">
              Clear cart
            </Button>
          ) : null}
        </div>
        <div>
          <div className="mb-4">
            <div>Total: {cart.cartTotalAmount} kr</div>
          </div>
          <Button variant="contained" color="success">
            Pay now
          </Button>
        </div>
      </div>
    </div>
  );
};
