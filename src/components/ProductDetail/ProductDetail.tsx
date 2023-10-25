import { useNavigate } from "react-router-dom";

import { ProductTypes } from "../../types/entities";

interface ProductDetailProps {
  product: any;
}

export const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="mt-24">
      <div>
        <button onClick={handleBackButtonClick}>Back to list view</button>
      </div>
      <div>
        {product.name} - {product.price} kr
      </div>
    </div>
  );
};
