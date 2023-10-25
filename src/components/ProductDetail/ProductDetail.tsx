import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowCircleLeft } from "@phosphor-icons/react";

import { ProductTypes, SelectedProductTypes } from "../../types/entities";

interface ProductDetailProps {
  product: ProductTypes;
}

export const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState({
    color: "",
    storage: 0,
    power: 0,
    quantity: 0,
  });

  const handleBackButtonClick = () => {
    dispatch({ type: "selectedItem/CLEAR_SELECTED_ITEM" });
    navigate(-1);
  };

  const handleOptionClick = (option: SelectedProductTypes) => {
    setSelectedOption(option);
  };

  const handleAddToCartClick = () => {};

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
          {product.available ? "In Stock" : "Out of stock"}
        </div>
        <div>{product.price} kr</div>
      </div>
      {product.options ? (
        <div className="flex mb-8 space-x-2">
          {product.options.map((option, index) => {
            return (
              <div
                className={`p-3 border border-black  cursor-pointer hover:bg-white ${
                  option.quantity > 0 ? "" : "opacity-40"
                }`}
                key={index}
                onClick={() => handleOptionClick(option)}
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

      <div className="mb-5">
        <button disabled={selectedOption.quantity <= 0}>Add to cart</button>
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
