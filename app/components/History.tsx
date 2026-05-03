"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Playfair_Display } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export default function History() {
  const containerRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // --- CONFIGURACIÓN PARA ESCRITORIO (Horizontal) ---
    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray(".history-panel");
      const bgs = gsap.utils.toArray(".parallax-bg");

      // Animación principal de scroll horizontal
      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          // El final depende del ancho real del contenido horizontal
          end: () => "+=" + (wrapperRef.current?.scrollWidth || "3000"),
        }
      });

      // Efecto Parallax en los fondos
      bgs.forEach((bg: any) => {
        gsap.set(bg, { x: "-10vw" });
        gsap.to(bg, {
          x: "10vw",
          ease: "none",
          scrollTrigger: {
            trigger: bg.parentElement,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
          }
        });
      });

      // Animación de aparición de textos (Stagger)
      panels.forEach((panel: any) => {
        gsap.from(panel.querySelectorAll(".animate-up"), {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse"
          }
        });
      });
    });

    // --- CONFIGURACIÓN PARA MÓVIL (Vertical) ---
    mm.add("(max-width: 767px)", () => {
      const panels = gsap.utils.toArray(".history-panel");
      
      panels.forEach((panel: any) => {
        // Animamos los elementos para que aparezcan conforme el usuario baja
        gsap.from(panel.querySelectorAll(".animate-up"), {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%", // Se activa cuando el panel está al 80% de la pantalla
            toggleActions: "play none none reverse"
          }
        });
      });
    });

    return () => mm.revert(); 

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="historia" 
      className="relative w-full bg-brand-black overflow-hidden"
    >
      {/* 
          Contenedor Wrapper: 
          - Móvil: flex-col (vertical), ancho normal.
          - Desktop: flex-row (horizontal), ancho de 300vw.
      */}
      <div 
        ref={wrapperRef} 
        className="flex flex-col md:flex-row w-full md:w-[300vw] h-auto md:h-screen"
      >
        
        {/* PANEL 1: El Origen */}
        <div className="history-panel w-full md:w-screen h-screen flex flex-col justify-center px-6 md:px-32 relative overflow-hidden border-b border-white/5 md:border-none">
          <div className="parallax-bg absolute top-0 left-0 h-full w-full md:w-[120vw] z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-black via-transparent to-brand-black z-20"></div>
            <Image src="/images/historia-1.webp" alt="Origen" fill className="object-cover" />
          </div>
          
          <div className="max-w-2xl z-30 relative">
            <h2 className={`${playfair.className} text-5xl md:text-7xl text-white mb-6 animate-up`}>
              Nuestro <span className="italic text-white/70">Origen</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed animate-up">
              Un legado ancestral que nace del respeto por la tierra y la pasión por los sabores intensos. La birria es una herencia pasada de generación en generación que hemos traído a Cuenca.
            </p>
          </div>
        </div>

        {/* PANEL 2: Los Ingredientes */}
        <div className="history-panel w-full md:w-screen h-screen flex flex-col justify-center items-center px-6 md:px-32 relative overflow-hidden border-b border-white/5 md:border-none">
          <div className="parallax-bg absolute top-0 left-0 h-full w-full md:w-[120vw] z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-black via-transparent to-brand-black z-20"></div>
            <Image src="/images/historia-2.webp" alt="Ingredientes" fill className="object-cover" />
          </div>

          <div className="max-w-2xl text-center z-30 relative">
            <h2 className={`${playfair.className} text-5xl md:text-7xl text-white mb-6 animate-up`}>
              Selección de <span className="italic text-white/70">Chiles</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed animate-up">
              La magia comienza con nuestra meticulosa selección de chiles secos y especias frescas. Cada ingrediente es escogido a mano para garantizar el equilibrio perfecto.
            </p>
          </div>
        </div>

        {/* PANEL 3: La Cocción Lenta */}
        <div className="history-panel w-full md:w-screen h-screen flex flex-col justify-center items-end px-6 md:px-32 text-right relative overflow-hidden">
          <div className="parallax-bg absolute top-0 left-0 h-full w-full md:w-[120vw] z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-black via-transparent to-brand-black z-20"></div>
            {/* Video de fondo */}
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 md:opacity-100">
              <source src="/videos/coccion-lenta.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="max-w-2xl z-30 relative">
            <h2 className={`${playfair.className} text-5xl md:text-7xl text-white mb-6 animate-up`}>
              Cocción <span className="italic text-white/70">Lenta</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed animate-up">
              El tiempo es nuestro ingrediente secreto. Horas de cocción lenta aseguran que cada hebra de carne se deshaga en tu boca, absorbiendo nuestro consomé artesanal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}