"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { menuData, MenuItem } from "@/data/Menu";
import { Playfair_Display } from "next/font/google";
import { useCart } from "@/context/CartContext"; // 1. Importamos el carrito

const playfair = Playfair_Display({ subsets: ["latin"] });
const categories = ["Recomendados", "Birria", "Platos Fuertes", "Menú Infantil", "Postres", "Bebidas", "Extras"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Recomendados");
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart(); // 2. Hook del carrito

  const filteredItems = activeCategory === "Recomendados" 
    ? menuData.filter(item => item.isRecommended)
    : menuData.filter(item => item.category === activeCategory);

  const { contextSafe } = useGSAP({ scope: containerRef });

  // 3. Animación sutil y correcta de categorías
  const handleCategoryChange = contextSafe((newCat: string) => {
    if (newCat === activeCategory || isAnimating) return;

    setIsAnimating(true);
    
    // Fase de salida
    gsap.to(".menu-card", {
      opacity: 0,
      y: 15,
      duration: 0.25,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => {
        setActiveCategory(newCat); // Cambio de estado de React
        
        // Fase de entrada en el siguiente frame
        setTimeout(() => {
          gsap.fromTo(".menu-card", 
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              stagger: 0.05, 
              ease: "power3.out",
              onComplete: () => setIsAnimating(false) 
            }
          );
        }, 30);
      }
    });
  });

  return (
    <section ref={containerRef} id="menu" className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`${playfair.className} text-6xl md:text-8xl text-white uppercase tracking-tighter`}>
            Nuestra <span className="italic text-white/30">Selección</span>
          </h2>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              disabled={isAnimating}
              onClick={() => handleCategoryChange(cat)}
              className={`relative py-2 font-body text-[10px] md:text-xs uppercase tracking-[0.4em] transition-colors duration-500
                ${activeCategory === cat ? "text-white" : "text-white/20 hover:text-white/50"}`}
            >
              {cat}
              <div className={`absolute bottom-0 left-0 h-[1px] bg-brand-red transition-all duration-500 ${activeCategory === cat ? 'w-full' : 'w-0'}`} />
            </button>
          ))}
        </div>

        {/* Grilla de Platos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[600px]">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0a0a0a]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                   {/* 4. El botón ahora añade al carrito */}
                   <button 
                    onClick={() => addToCart(item)}
                    className="bg-white text-black px-8 py-4 rounded-full font-body text-[10px] uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors active:scale-95"
                   >
                     + Añadir al pedido
                   </button>
                </div>
              </div>
              <div className="mt-6 border-b border-white/5 pb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className={`${playfair.className} text-2xl text-white`}>{item.name}</h3>
                  <span className="text-brand-yellow font-bold">${item.price}</span>
                </div>
                <p className="mt-2 text-white/30 font-body text-[10px] uppercase tracking-wider line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}