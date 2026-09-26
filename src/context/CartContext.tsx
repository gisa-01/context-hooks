import { createContext, useState } from "react";

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

export function CartProvider({ children }: {children: React.ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);

  return(
    <CartContext.Provider value={{ items }}>
      {children}
    </CartContext.Provider>
  );
} 
