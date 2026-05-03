"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Importación crítica para evitar errores de ejecución
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Navbar() {
  const whatsappNumber = "593983760304";

  return (
    <nav className="fixed top-0 w-full z-[110] bg-black/60 backdrop-blur-lg border-b border-white/5 py-5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Vinculado al inicio de la página */}
        <Link href="#inicio" className="relative w-40 h-10 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logo.webp" 
            alt="Chula Birria Logo"
            fill
            className="object-contain"
            priority // Carga prioritaria por ser el elemento principal de marca
          />
        </Link>

        {/* NAVEGACIÓN PRINCIPAL */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#History" className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors font-medium">
            Historia
          </Link>
          
          <Link href="#menu" className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors font-medium">
            Menú
          </Link>
          
          <Link href="#contacto" className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors font-medium">
            Contacto
          </Link>

          {/* BOTÓN DE RESERVA ACCIONABLE */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustaría%20hacer%20una%20reserva.`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-8 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 font-bold"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
}