import { createContext, useState } from "react";

import PRODUCTS from "../shop.data.json";
import { ProductType } from "models";

type ProductContextType = {
  products: ProductType[];
};

type ProductsProviderProps = {
  children: React.ReactNode;
};

export const ProductsContext = createContext<ProductContextType>({
  products: [],
});

// Convert the 'id' property to string during import
const convertedProducts: ProductType[] = PRODUCTS.map((product) => ({
  ...product,
  id: String(product.id), // Convert the 'id' property to string
}));

export const ProductsProvider = (props: ProductsProviderProps) => {
  const { children } = props;

  const [products, setProducts] = useState<ProductType[]>(convertedProducts);

  const value: ProductContextType = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
