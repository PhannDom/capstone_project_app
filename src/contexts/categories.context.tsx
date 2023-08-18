import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { ProductType } from "models";
// import SHOP_DATA from "shop.data";

type CategoryContextType = {
  categoriesMap: { [key: string]: ProductType[] };
};

type ProductsProviderProps = {
  children: React.ReactNode;
};

export const CategoriesContext = createContext<CategoryContextType>({
  categoriesMap: {},
});

export const ProductsProvider = (props: ProductsProviderProps) => {
  const { children } = props;

  const [categoriesMap, setCategoriesMap] = useState<CategoryContextType>({
    categoriesMap: {},
  });

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap({ categoriesMap: categoryMap });
      return categoryMap;
    };
    getCategories();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  const value: CategoryContextType = {
    categoriesMap: categoriesMap.categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
