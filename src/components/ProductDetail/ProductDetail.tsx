import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

import {
  CartItemTypes,
  ProductTypes,
  SelectedProductTypes,
} from "../../types/entities";
import { addToCart, getTotals } from "../../redux/cartSlice";
import { RootState } from "../../main";

interface ProductDetailProps {
  product: ProductTypes;
}

export const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(
    {} as SelectedProductTypes
  );

  if (!product) {
    return (
      <div className="absolute top-1/2 left-1/2 text-lg flex flex-col text-center">
        Product not found
        <Link className="text-blue-600" to="/">
          Back to Products list
        </Link>
      </div>
    );
  }

  useEffect(() => {
    dispatch(getTotals(null));
  }, [cart]);

  useEffect(() => {
    setSelectedOption(itemWithHighestQuant as SelectedProductTypes);
  }, [product.options]);

  const handleBackButtonClick = () => {
    navigate("/");
  };

  const handleOptionClick = (option: SelectedProductTypes) => {
    setSelectedOption(option);
  };

  const handleAddToCartClick = (product: ProductTypes) => {
    const payload = {
      ...product,
      variantId: selectedOption.id,
      variantDetails: selectedOption,
    };

    dispatch(addToCart(payload));
  };

  const itemWithHighestQuant = product.options.reduce((max, obj) =>
    obj.quantity > max.quantity ? obj : max
  );

  const compareOptions = (
    selectedOption: SelectedProductTypes,
    option: SelectedProductTypes
  ) => {
    const stringifiedSelectedOption = JSON.stringify(selectedOption);
    const stringifiedOption = JSON.stringify(option);

    return stringifiedSelectedOption === stringifiedOption;
  };

  return (
    <div className="mt-24 px-10">
      <div>
        <button className="flex" onClick={handleBackButtonClick}>
          <ArrowCircleLeft size={32} />
          <span className="flex flex-col justify-center pl-2">
            Back to all products
          </span>
        </button>
      </div>
      <div className="mt-10 mb-5">
        <div className="text-2xl font-bold capitalize">{product.name}</div>
        <div
          className={`${product.available ? "text-green-700" : "text-red-500"}`}
        >
          {product.available ? "Available" : "Currently unavailable"}
        </div>
        <div>{product.price} kr</div>
      </div>
      {product.options ? (
        <div className={`grid mb-8 grid-cols-2 md:grid-cols-6 gap-2 max-w-xl`}>
          {product.options.map((option, index) => {
            return (
              <div
                className={`p-1.5 md:p-3 border text-xs md:text-sm border-black  cursor-pointer hover:bg-white ${
                  option.quantity > 0 ? "" : "opacity-40"
                } ${
                  compareOptions(selectedOption, option as SelectedProductTypes)
                    ? "bg-white"
                    : ""
                }`}
                key={index}
                onClick={(e) =>
                  handleOptionClick(option as SelectedProductTypes)
                }
              >
                <div className="capitalize">{option.color}</div>
                {option.storage ? <div>{option.storage}GB</div> : null}
                {option.power ? <div>{option.power}W</div> : null}
                <div className="font-bold">{option.quantity} in stock</div>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="mb-5 flex flex-col max-w-xs space-y-4">
        {selectedOption ? (
          <Button
            variant="contained"
            onClick={() => handleAddToCartClick(product)}
            disabled={
              selectedOption.quantity <= 0 ||
              !product.available ||
              cart.cartItems.some(
                (cartItem: CartItemTypes) =>
                  cartItem.cartQuantity === selectedOption.quantity &&
                  parseInt(cartItem.variantId) ===
                    parseInt(selectedOption.id as string)
              )
            }
          >
            Add to Cart
          </Button>
        ) : null}

        <Button
          variant="contained"
          onClick={() => navigate("/checkout")}
          color="success"
        >
          Go to Checkout
        </Button>
      </div>

      <div>
        <div className="text-xl mb-3">Product specifications</div>
        <div className="grid grid-cols-2 max-w-sm">
          {product.weight ? (
            <>
              <div>Weight: </div>
              <div>{product.weight} kg</div>
            </>
          ) : null}

          {product.brand ? (
            <>
              <div>Brand: </div>
              <div>{product.brand}</div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
