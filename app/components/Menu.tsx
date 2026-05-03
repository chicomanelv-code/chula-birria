"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// Listado completo de categorías
const categories = [
  "RECOMENDADOS", "BIRRIA", "PLATOS FUERTES", "MENÚ INFANTIL", "POSTRES", "BEBIDAS", "EXTRAS"
];

// Base de datos completa vinculada a categorías
const menuItems = [
  // RECOMENDADOS
  { id: 1, name: "Quesabirria", price: 3.50, img: "/images/quesabirria.webp", category: "RECOMENDADOS" },
  { id: 2, name: "Tacos de Birria (3 unidades)", price: 9.48, img: "/images/historia-1.webp", category: "RECOMENDADOS" },
  { id: 3, name: "Burro de Birria", price: 9.00, img: "/images/burro.webp", category: "RECOMENDADOS" },
  
  // BIRRIA
  { id: 4, name: "Taco Suelto", price: 2.50, img: "/images/historia-1.webp", category: "BIRRIA" },
  { id: 5, name: "Consomé Mediano", price: 3.00, img: "/images/historia-2.webp", category: "BIRRIA" },
  
  // BEBIDAS
  { id: 6, name: "Horchata Mexicana", price: 2.80, img: "/images/horchata.webp", category: "BEBIDAS" },
  { id: 7, name: "Agua de Jamaica", price: 2.50, img: "/images/bebidas.webp", category: "BEBIDAS" },
  
  // POSTRES
  { id: 8, name: "Lemon Pie", price: 4.50, img: "/images/postres.webp", category: "POSTRES" },
];

export default function Menu() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("RECOMENDADOS");

  // Filtramos los items según la categoría seleccionada
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-6">
        {/* Título Estilo Boutique */}
        <div className="text-center mb-16">
          <h2 className={`${playfair.className} text-6xl md:text-8xl text-white leading-tight uppercase`}>
            NUESTRA <span className="italic font-light text-white/80">SELECCIÓN</span>
          </h2>
          
          {/* Navegación de Categorías */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-300 ${
                  activeCategory === cat ? "text-white border-b border-white/40 pb-1" : "text-white/40 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Dinámico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="max-w-[70%] text-left">
                      <h3 className="text-white font-light uppercase tracking-wider text-sm mb-1">{item.name}</h3>
                      <p className="text-white/60 font-bold text-lg">${item.price.toFixed(2)}</p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(item);
                      }}
                      className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
                    >
                      <Plus size={20} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-white/20 uppercase tracking-[0.4em] text-[10px]">Próximamente disponible en esta sección</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}