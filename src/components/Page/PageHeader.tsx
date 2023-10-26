import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const PageHeader = ({}): JSX.Element => {
  const [cartSize, setCartSize] = useState(0);

  // const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   console.log(cart.length);
  //   setCartSize(cart.length);
  // }, [cart]);

  return (
    <div className="flex items-center justify-between w-full fixed top-0 shadow-xl bg-slate-700 text-white px-10 py-5">
      <div></div>
      <div>
        <Link to="/checkout">Cart ({cartSize ? cartSize : 0})</Link>
      </div>
    </div>
  );
};
