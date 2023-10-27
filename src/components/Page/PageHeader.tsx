import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../redux/cartSlice";

export const PageHeader = ({}): JSX.Element => {
  const { cartTotalQuantity, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartTotalQuantity, cart]);

  return (
    <div className="flex items-center justify-between w-full fixed top-0 shadow-xl bg-slate-700 text-white px-10 py-5">
      <div></div>
      <div>
        <Link to="/checkout">Cart ( {cartTotalQuantity} )</Link>
      </div>
    </div>
  );
};
