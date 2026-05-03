"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext"; 

// Centralizamos la data para reducir líneas y evitar errores
const menuItems = [
  { id: 1, name: "Quesabirria", price: 3.50, img: "/images/quesabirria.webp" },
  { id: 2, name: "Taco de Birria", price: 2.50, img: "/images/historia-1.webp" },
  { id: 3, name: "Consomé Grande", price: 4.00, img: "/images/historia-2.webp" },
  { id: 4, name: "Burro Birria", price: 7.50, img: "/images/burro.webp" },
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-24 bg-brand-black relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl text-white font-black uppercase italic mb-16 text-center">
          Nuestro <span className="text-brand-red">Menú</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-brand-red/50 transition-all duration-500 shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Especialidad</span>
                  <h3 className="text-white text-xl font-bold uppercase leading-none">{item.name}</h3>
                  <p className="text-brand-red font-black text-2xl mt-2">${item.price.toFixed(2)}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(item);
                  }}
                  className="relative z-30 h-14 w-14 flex items-center justify-center bg-brand-red text-white rounded-2xl shadow-[0_10px_20px_rgba(231,24,37,0.4)] hover:bg-white hover:text-brand-red active:scale-90 transition-all duration-300 pointer-events-auto"
                >
                  <Plus size={28} strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}