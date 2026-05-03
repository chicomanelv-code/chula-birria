"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext"; // Ruta corregida usando el alias

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsCartOpen, cartItems } = useCart();

  const totalItems = cartItems.length;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Historia", href: "#historia" },
    { name: "Menú", href: "#menu" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed w-full z-[150] bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative w-28 h-10 block z-[160]">
          <Image 
            src="/images/logo.webp" 
            alt="Chula Birria" 
            fill 
            className="object-contain" 
            priority 
          />
        </Link>

        {/* MENÚ DESKTOP + CARRITO DESKTOP */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-white/50 text-[10px] uppercase tracking-[0.4em] hover:text-white transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}

          {/* Botón Carrito Desktop */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-white/50 hover:text-white transition-colors ml-4"
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* CONTROLES MÓVIL (Carrito + Hamburguesa) */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Botón Carrito Móvil */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-white p-2"
          >
            <ShoppingCart size={24} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Botón Hamburguesa */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* OVERLAY DEL SIDEBAR */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* SIDEBAR MÓVIL */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-white/10 z-[200] transform transition-transform duration-500 ease-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-white text-4xl font-black uppercase italic tracking-tighter hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto">
            <p className="text-white/20 text-[9px] uppercase tracking-widest">Cuenca, Ecuador</p>
          </div>
        </div>
      </div>
    </nav>
  );
}