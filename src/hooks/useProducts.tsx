import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchList("../../data.json");
  }, []);

  async function fetchList(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.items);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return products;
};

export default useProducts;
