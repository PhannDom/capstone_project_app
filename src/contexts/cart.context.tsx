import { createContext, useState } from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value: CartContextType = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
