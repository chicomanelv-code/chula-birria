"use client";

import React from "react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Fondo oscuro con desenfoque */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 z-[240] ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Modal flotante centrado */}
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-lg bg-white rounded-[2.5rem] z-[250] overflow-hidden transform transition-all duration-500 shadow-2xl ${isCartOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
        
        <div className="p-6 md:p-8 flex flex-col max-h-[85vh]">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-red/10 p-3 rounded-2xl">
                <ShoppingBag className="text-brand-red" size={24} />
              </div>
              <h2 className="text-zinc-900 text-2xl md:text-3xl font-black uppercase italic">Tu Pedido</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="text-zinc-400 hover:text-brand-red p-2 transition-colors">
              <X size={32} />
            </button>
          </div>

          {/* LISTA CON SCROLL INTERNO: Esto evita que el modal crezca infinitamente */}
          <div className="flex-grow overflow-y-auto space-y-4 pr-2 mb-6 scrollbar-hide" style={{ maxHeight: '40vh' }}>
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-zinc-400 uppercase tracking-widest text-[10px]">Tu carrito está vacío</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-zinc-50 p-4 rounded-3xl border border-zinc-100">
                  <div className="flex flex-col">
                    <h4 className="text-zinc-900 font-bold uppercase text-[12px]">{item.name}</h4>
                    <span className="text-zinc-400 text-[10px] uppercase">Cant: 1</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-zinc-900 font-black text-md">${item.price.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-300 hover:text-brand-red transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer fijo del modal */}
          <div className="border-t border-zinc-100 pt-6">
            <div className="flex justify-between items-end mb-6 px-2">
              <span className="text-zinc-400 uppercase text-[10px] tracking-[0.2em] font-bold">Total</span>
              <span className="text-zinc-900 text-3xl font-black">${cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              disabled={cartItems.length === 0}
              className="w-full bg-brand-red text-white py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-zinc-900 transition-all duration-300 shadow-xl shadow-brand-red/20 active:scale-95 disabled:opacity-30 disabled:grayscale"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}