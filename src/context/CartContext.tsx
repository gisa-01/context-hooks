import { createContext } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;

};

type CartContextType = {
  items: CartItem[];
};

export const CartContext = createContext<CartContextType | null >(null);
