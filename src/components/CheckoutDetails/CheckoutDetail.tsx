import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import { CheckoutItem } from "./CheckoutItem";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Product 1",
    brand: "Brand 1",
    weight: 1,
    color: "red",
    storage: 64,
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    brand: "Brand 2",
    weight: 2,
    color: "blue",
    storage: 654,
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    brand: "Brand 3",
    weight: 3,
    color: "green",
    power: 64,
    price: 1020,
    quantity: 1,
  },
];

export const CheckoutDetails = ({}): JSX.Element => {
  const cart = useSelector((state) => state.cart);

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
            <div className="grid grid-cols-5 border-b border-b-slate-400 py-5">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {cart.cartItems?.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} item={cartItem} />;
              })}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between">
        <div>
          <Button variant="contained">Clear cart</Button>
        </div>
        <div>
          <div>
            <div>Subtotal</div>
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
