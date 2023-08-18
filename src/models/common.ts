export type CategoryType = {
  id: string;
  title: string;
  imageUrl: string;
  route: string;
};

export type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

export type CartItemType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export type ShopDataType = {
  title: string;
  items: ProductType[];
};
