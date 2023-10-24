export interface Product {
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
