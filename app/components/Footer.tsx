"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// 1. Eliminamos Facebook e Instagram de aquí, ya que no existen en la librería
import { MessageCircle, MapPin, Clock } from "lucide-react"; 
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="space-y-6">
            <Link href="#inicio" className="relative w-32 h-10 block">
              <Image 
                src="/images/logob.webp" 
                alt="Chula Birria Logo" 
                fill 
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-widest">
              Sabor auténtico mexicano en el corazón de Cuenca. Tradición, calidad y el mejor picante.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navegación</h4>
            <ul className="space-y-4">
              {["Inicio", "Historia", "Menú", "Contacto"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase() === 'inicio' ? 'inicio' : item.toLowerCase()}`}
                    className="text-white/40 text-[10px] uppercase tracking-widest hover:text-brand-red transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Ubicación</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
              Calle Larga y Alfonso Jerves<br />
              Cuenca, Ecuador
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4">
              +593 98 376 0304
            </p>
          </div>

          {/* Columna 4: Redes Sociales (SVG Manual) */}
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Síguenos</h4>
            <div className="flex gap-4">
              {/* Icono de Facebook (SVG directo) */}
              <a href="https://www.facebook.com/chulabirria" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              
              {/* Icono de Instagram (SVG directo) */}
              <a href="https://www.instagram.com/chulabirria_ec/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all" target="_blank"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>

              <a href="https://wa.me/593983760304" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.2em]">
            © {currentYear} Chula Birria. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-[9px] uppercase tracking-[0.2em]">
            Desarrollado con pasión en Cuenca
          </p>
        </div>
      </div>
    </footer>
  );
}