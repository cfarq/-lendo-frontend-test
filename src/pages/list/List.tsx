import { useEffect, useState } from "react";

import { Page } from "../../components/Page";

export const ListPage = (): JSX.Element => {
  useEffect(() => {
    fetchList("../../data.json");
  }, []);

  const [products, setProducts] = useState([]);

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

  return (
    <Page>
      <h1 className="text-3xl font-bold">List</h1>
    </Page>
  );
};
