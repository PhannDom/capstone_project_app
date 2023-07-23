export type CategoryType = {
  id: string;
  title: string;
  imageUrl: string;
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
