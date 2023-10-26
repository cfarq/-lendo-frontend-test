import { CartItemTypes } from "../../types/entities";

interface CheckoutItemProps {
  item: CartItemTypes;
}

export const CheckoutItem = ({ item }: CheckoutItemProps): JSX.Element => {
  return (
    <div>
      <div>{item.name}</div>
    </div>
  );
};
