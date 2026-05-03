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
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function History() {
  const containerRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".history-panel");
    
    // El cálculo del "End" debe ser proporcional al ancho total
    // Si son 3 paneles, se desplaza un 200% (el primero ya se ve)
    const totalPanels = panels.length;

    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none", // Obligatorio para que el scroll sea lineal
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,           // Bloquea el scroll vertical
        scrub: 1,            // Vincula el movimiento al dedo/mouse
        anticipatePin: 1,    // Evita saltos en iOS/Android
        invalidateOnRefresh: true, // Recalcula si cambia el tamaño/orientación
        // El final es la suma de los anchos para que el tiempo de scroll sea natural
        end: () => `+=${wrapperRef.current?.offsetWidth}`,
      }
    });

    // Animación de entrada para los textos en cada panel
    panels.forEach((panel: any) => {
      gsap.from(panel.querySelectorAll(".animate-up"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween, // Sincroniza con el scroll horizontal
          start: "left center",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="historia" 
      // touch-action: pan-y permite que el scroll vertical alimente la animación
      className="relative w-full overflow-hidden bg-brand-black" 
      style={{ touchAction: "pan-y" }} 
    >
      <div 
        ref={wrapperRef} 
        // 100dvh es vital para móviles (evita saltos por la barra de navegación)
        className="flex w-[300vw] h-[100dvh] items-center"
      >
        
        {/* PANEL 1: ORIGEN */}
        <div className="history-panel w-screen h-full flex flex-col justify-center px-6 md:px-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-20"></div>
            <Image src="/images/historia-1.webp" alt="Origen" fill className="object-cover" priority />
          </div>
          
          <div className="max-w-2xl z-30 relative">
            <h2 className={`${playfair.className} text-5xl md:text-8xl text-white mb-6 animate-up`}>
              Nuestro <span className="italic text-white/70">Origen</span>
            </h2>
            <p className="text-base md:text-xl text-white/70 leading-relaxed animate-up">
              Un legado ancestral que nace del respeto por la tierra y la pasión por los sabores intensos. Traemos la esencia de México a cada rincón.
            </p>
          </div>
        </div>

        {/* PANEL 2: CHILES */}
        <div className="history-panel w-screen h-full flex flex-col justify-center items-center px-6 md:px-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <Image src="/images/historia-2.webp" alt="Ingredientes" fill className="object-cover" />
          </div>

          <div className="max-w-2xl text-center z-30 relative">
            <h2 className={`${playfair.className} text-5xl md:text-8xl text-white mb-6 animate-up`}>
              Selección de <span className="italic text-white/70">Chiles</span>
            </h2>
            <p className="text-base md:text-xl text-white/70 leading-relaxed animate-up">
              Meticulosa selección de chiles secos y especias frescas escogidos a mano para garantizar el equilibrio perfecto entre picor y aroma.
            </p>
          </div>
        </div>

        {/* PANEL 3: COCCIÓN */}
        <div className="history-panel w-screen h-full flex flex-col justify-center items-end px-6 md:px-32 text-right relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/coccion-lenta.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="max-w-2xl z-30 relative">
            <h2 className={`${playfair.className} text-5xl md:text-8xl text-white mb-6 animate-up`}>
              Cocción <span className="italic text-white/70">Lenta</span>
            </h2>
            <p className="text-base md:text-xl text-white/70 leading-relaxed animate-up">
              El tiempo es nuestro secreto. Horas de fuego bajo aseguran que cada hebra de carne se deshaga en tu boca, absorbiendo nuestro consomé artesanal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}