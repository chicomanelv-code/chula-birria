"use client";

import React from "react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-500 z-[240] ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-lg bg-white rounded-[2.5rem] z-[250] overflow-hidden transform transition-all duration-500 shadow-2xl ${isCartOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
        <div className="p-6 md:p-8 flex flex-col max-h-[85vh]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3 text-zinc-900">
              <ShoppingBag className="text-red-600" size={24} />
              <h2 className="text-2xl font-black uppercase italic">Tu Pedido</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="text-zinc-400 p-2">
              <X size={32} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto space-y-4 mb-6 pr-2" style={{ maxHeight: '40vh' }}>
            {cartItems.length === 0 ? (
              <p className="text-center text-zinc-400 py-10 uppercase text-[10px] tracking-widest">El carrito está vacío</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-zinc-50 p-4 rounded-3xl border border-zinc-100">
                  <div className="flex flex-col">
                    <h4 className="text-zinc-900 font-bold uppercase text-[12px]">{item.name}</h4>
                    <span className="text-zinc-400 text-[10px]">Cant: 1</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-900">
                    <p className="font-black">${item.price.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-300 hover:text-red-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-zinc-100 pt-6">
            <div className="flex justify-between items-end mb-6 text-zinc-900">
              <span className="text-zinc-400 uppercase text-[10px] font-bold">Total</span>
              <span className="text-3xl font-black">${cartTotal.toFixed(2)}</span>
            </div>
            <button disabled={cartItems.length === 0} className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase italic hover:bg-zinc-900 transition-all disabled:opacity-30">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}