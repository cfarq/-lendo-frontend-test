import { Page } from "../../components/Page";
import { ProductDetail } from "../../components/ProductDetail";

const PRODUCT = {
  id: 1,
  name: "Philips hue bulb",
  brand: "Philips",
  price: "500",
  available: true,
  weight: 0.2,
  options: [
    {
      color: "white",
      power: 6.5,
      quantity: 1,
    },
    {
      color: "white",
      power: 9.5,
      quantity: 2,
    },
    {
      color: "red",
      power: 6.5,
      quantity: 3,
    },
    {
      color: "red",
      power: 9.5,
      quantity: 4,
    },
  ],
};
export const ProductPage = ({}): JSX.Element => {
  return (
    <Page>
      <ProductDetail product={PRODUCT} />
    </Page>
  );
};
