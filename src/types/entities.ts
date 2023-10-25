export interface ProductTypes {
  id: number;
  name: string;
  brand: string;
  price: string;
  available: boolean;
  weight: number;
  options: [
    {
      color: string;
      power?: number;
      storage?: number;
      quantity: number;
    }
  ];
}

export interface SelectedProductTypes {
  color: string;
  storage: string | undefined;
  power: number | undefined;
  quantity: number;
}
