import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../redux/cartSlice";
import { RootState } from "../../main";

export const PageHeader = ({}): JSX.Element => {
  const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(null));
  }, [cartTotalQuantity]);

  return (
    <div className="flex items-center justify-between w-full fixed top-0 shadow-xl bg-slate-700 text-white px-10 py-5">
      <div>
        <Link to="/">All products</Link>
      </div>
      <div>
        <Link className="flex" to="/checkout">
          Cart ({cartTotalQuantity})
        </Link>
      </div>
    </div>
  );
};
