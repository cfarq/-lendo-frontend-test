import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Button from "@mui/material/Button";

import { ProductTypes, SelectedProductTypes } from "../../types/entities";
import toast from "react-hot-toast";

interface ProductDetailProps {
  product: ProductTypes;
}

export const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState<Record<string, unknown>>(
    {}
  );

  const handleBackButtonClick = () => {
    dispatch({ type: "selectedItem/CLEAR_SELECTED_ITEM" });
    navigate("/");
  };

  const handleOptionClick = (option: SelectedProductTypes) => {
    setSelectedOption(option);
  };

  const handleAddToCartClick = () => {
    dispatch({
      type: "cart/UPDATE_CART_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        brand: product.brand,
        weight: product.weight,
        ...selectedOption,
      },
    });
    toast.success("Added to cart");
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

  useEffect(() => {
    setSelectedOption(itemWithHighestQuant);
    // set selected option for item with biggest quantity in options array
  }, [product.options]);

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
        <div className="text-2xl font-bold">{product.name}</div>
        <div
          className={`${product.available ? "text-green-700" : "text-red-500"}`}
        >
          {product.available ? "Available" : "Currently unavailable"}
        </div>
        <div>{product.price} kr</div>
      </div>
      {product.options ? (
        <div className="flex flex-wrap mb-8 space-x-2 md:space-x-4 space-y-2 md:space-y-4">
          {product.options.map((option, index) => {
            return (
              <div
                className={`p-1.5 md:p-3 border text-xs md:text-sm border-black  cursor-pointer hover:bg-white ${
                  option.quantity > 0 ? "" : "opacity-40"
                } ${compareOptions(selectedOption, option) ? "bg-white" : ""}`}
                key={index}
                onClick={(e) => handleOptionClick(option)}
              >
                <div className="capitalize">{option.color}</div>
                {option.storage ? <div>{option.storage} gb</div> : null}
                {option.power ? <div>{option.power} watts</div> : null}
                <div>{option.quantity} in stock</div>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="mb-5 flex flex-col max-w-xs space-y-4">
        {selectedOption ? (
          <Button
            variant="contained"
            onClick={handleAddToCartClick}
            disabled={selectedOption.quantity <= 0 || !product.available}
          >
            Add to Cart
          </Button>
        ) : null}

        <Button
          variant="contained"
          onClick={() => navigate("/checkout")}
          color="secondary"
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
