"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import { MapPin, ExternalLink } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function MapSection() {
  /**
   * URL de inserción corregida para la intersección exacta.
   * Se ajustan las coordenadas para Av. Francisco Moscoso y Jacinto Flores.
   */
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.620025754585!2d-79.0016462!3d-2.9161741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTQnNTguMiJTIDc5wrAwMCcwNS45Ilc!5e0!3m2!1ses!2sec!4v1714750000000!5m2!1ses!2sec";

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Bloque de Información */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-red/20 bg-brand-red/5">
              <MapPin className="text-brand-red w-4 h-4" />
              <span className="text-brand-red text-[10px] uppercase tracking-[0.3em] font-bold">Ubicación Actualizada</span>
            </div>
            
            <h2 className={`${playfair.className} text-5xl md:text-6xl text-white leading-tight uppercase`}>
              Encuéntranos <br /> en <span className="italic text-brand-red">Cuenca</span>
            </h2>
            
            <p className="text-white/40 text-[11px] uppercase tracking-[0.2em] leading-relaxed">
              Avenida Francisco Moscoso y Jacinto Flores. <br />
              Cuenca, Ecuador.
            </p>

            <a 
              href="https://www.google.com/maps/search/Avenida+Francisco+Moscoso+y+Jacinto+Flores,+Cuenca" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white border-b border-brand-red pb-2 text-[10px] uppercase tracking-[0.3em] hover:text-brand-red transition-colors group"
            >
              Abrir en Google Maps
              <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Mapa con Estética Boutique */}
          <div className="w-full lg:w-2/3 relative group">
            <div className="absolute -inset-4 bg-brand-red/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 aspect-video lg:aspect-square max-h-[550px] shadow-2xl">
              <iframe
                title="Mapa de Ubicación de Chula Birria"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale invert contrast-[1.1] opacity-70 hover:opacity-95 transition-opacity duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}