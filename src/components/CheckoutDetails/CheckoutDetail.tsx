import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Button } from "@mui/material";

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
        <div className="grid grid-cols-1 gap-4 mb-6">
          {DUMMY_DATA.map((item, index) => {
            return <CheckoutItem key={index} item={item} />;
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="contained" color="success">
          Pay now
        </Button>
      </div>
    </div>
  );
};
