import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProductTypes } from "../../types/entities";

interface ProductDetailProps {
  product: ProductTypes;
}

export const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="mt-24 px-10">
      <div>
        <button onClick={handleBackButtonClick}>Back to list view</button>
      </div>
      <div>
        {product.name} - {product.price} kr
      </div>
    </div>
  );
};
