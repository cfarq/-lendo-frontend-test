import { screen, render } from "@testing-library/react";

import { ProductList } from "./ProductList";
import { BrowserRouter } from "react-router-dom";

describe("ProductList", () => {
  it("renders the component with products", () => {
    const products = [
      {
        id: 8,
        name: "Samsung 40 UHD Smart TV",
        brand: "SAMSUNG",
        price: "3200",
        available: true,
        weight: 8.2,
        options: [
          {
            id: 1,
            color: "black",
            quantity: 19,
          },
        ],
      },
      {
        id: 9,
        name: "BenQ GW2765HE Eye-Care",
        brand: "BenQ",
        price: "2700",
        available: false,
        weight: 3.9,
        options: [
          {
            id: 1,
            color: "black",
            quantity: 3,
          },
        ],
      },
    ];

    render(
      <BrowserRouter>
        <ProductList products={products} />
      </BrowserRouter>
    );

    expect(screen.getByText("Samsung 40 UHD Smart TV")).toBeInTheDocument();
    expect(screen.getByText("BenQ GW2765HE Eye-Care")).toBeInTheDocument();
  });
});
