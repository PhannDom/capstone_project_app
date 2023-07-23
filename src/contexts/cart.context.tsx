import { CartItemType, ProductType } from "models";
import { createContext, useState, useEffect } from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartItems: CartItemType[];
  addItemToCart: (product: ProductType) => void;
  cartCount: number;
};

export const addCartItem = (
  cartItems: CartItemType[],
  productToAdd: ProductType
): CartItemType[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((c) =>
      c.id === productToAdd.id ? { ...c, quantity: c.quantity + 1 } : c
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product: ProductType) =>
    setCartItems((prevCartItems) => addCartItem(prevCartItems, product));

  const value: CartContextType = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
