import { createContext, useState } from "react";

import PRODUCTS from "../shop.data.json";
import { Product } from "models";

type ProductContextType = {
  products: Product[];
};

type ProductsProviderProps = {
  children: React.ReactNode;
};

export const ProductsContext = createContext<ProductContextType>({
  products: [],
});

// Convert the 'id' property to string during import
const convertedProducts: Product[] = PRODUCTS.map((product) => ({
  ...product,
  id: String(product.id), // Convert the 'id' property to string
}));

export const ProductsProvider = (props: ProductsProviderProps) => {
  const { children } = props;

  const [products, setProducts] = useState<Product[]>(convertedProducts);

  const value: ProductContextType = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
