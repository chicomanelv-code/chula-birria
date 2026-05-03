"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

// Definimos la interfaz para que TypeScript sepa qué es un "item"
export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isCartOpen, setIsCartOpen, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
}