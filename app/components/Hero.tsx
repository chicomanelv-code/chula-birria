// components/Hero.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { Playfair_Display } from "next/font/google"; // <-- Inyección directa de la fuente

gsap.registerPlugin(TextPlugin);

// Configuramos la tipografía elegante directamente aquí
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null); 
  const videoRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const introBgRef = useRef<HTMLDivElement>(null);
  const introLogoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Efecto Parallax (Mouse Move)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(titleRef.current, { x: xPos, y: yPos, duration: 1, ease: "power2.out" });
      gsap.to(videoRef.current, { x: -xPos * 0.4, y: -yPos * 0.4, duration: 1.5, ease: "power2.out" });
      gsap.to(cursorRef.current, { x: clientX, y: clientY, duration: 0.1 });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 2. Línea de Tiempo Maestra (Timeline)
    const tl = gsap.timeline();

    // --- FASE 1: Introducción Épica ---
    tl.from(introLogoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    })
    .to(introLogoRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power2.in",
      delay: 0.5
    })
    .to(introBgRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "expo.inOut",
    }, "-=0.4")

    // --- FASE 2: Animaciones del Hero Tipográfico ---
    const chars = titleRef.current?.querySelectorAll(".char");
    if (chars) {
      tl.from(chars, {
        y: 60, // Movimiento más sutil
        opacity: 0,
        stagger: 0.04,
        duration: 1.5,
        ease: "power4.out",
      }, "-=0.8"); 
    }

    // Efecto de escritura del tagline
    tl.to(".hero-subtitle", {
      duration: 3,
      text: "Donde Cada Plato Cuenta una Historia. Auténtica Gastronomía Mexicana en el Corazón de Cuenca.",
      ease: "none",
    }, "-=0.5");

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-brand-black flex items-center justify-center">
      
      {/* PANTALLA DE INTRODUCCIÓN ÉPICA */}
      <div ref={introBgRef} className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center">
        <div ref={introLogoRef} className="w-48 md:w-64 lg:w-80">
          <Image 
            src="/images/logo-04.webp" 
            alt="Chula Birria Intro" 
            width={500} 
            height={500} 
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Magnetic Cursor */}
      <div ref={cursorRef} className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[100] mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>

      {/* Video de Fondo */}
      <div ref={videoRef} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CONTENIDO PRINCIPAL (Ahora sí, 100% Luxury) */}
      <div className="relative z-30 text-center flex flex-col items-center px-4 w-full mt-20">
        {/* Aquí inyectamos la clase playfair.className directamente */}
        <h1 ref={titleRef} className={`${playfair.className} flex flex-col items-center justify-center text-white drop-shadow-2xl`}>
          
          {/* Palabra superior: Ligeramente más pequeña (bajamos a 4vw en desktop) */}
          <div className="overflow-hidden text-[6vw] md:text-[4vw] font-medium uppercase tracking-normal text-white/95 z-10 -mb-2 md:-mb-4">
            {splitText("AUTÉNTICA")}
          </div>
          
          {/* Palabra inferior: Reducida proporcionalmente (bajamos a 9.5vw en desktop) */}
          <div className="overflow-hidden text-[12vw] md:text-[9.5vw] font-bold uppercase tracking-tight text-white leading-none">
            {splitText("GASTRONOMÍA")}
          </div>
          
        </h1>
        
        <p className="hero-subtitle mt-12 font-body text-sm md:text-base text-white/60 max-w-xl italic min-h-[40px] drop-shadow-sm font-light"></p>
      </div>

      {/* ELEMENTO DECORATIVO (Responsivo: Horizontal abajo en móvil, Vertical a la derecha en escritorio) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-12 md:left-auto md:-translate-x-0 md:right-8 z-40 pointer-events-none flex justify-center w-full md:w-auto">
        
        {/* Versión Escritorio (Vertical) */}
        <p 
          className="hidden md:block font-body text-[10px] tracking-[0.8em] text-white/40 uppercase whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Est. 2026 • Cuenca • Ecuador
        </p>
        
        {/* Versión Móvil (Horizontal y centrada al fondo) */}
        <p className="block md:hidden font-body text-[8px] tracking-[0.6em] text-white/40 uppercase whitespace-nowrap">
          Est. 2026 • Cuenca • Ecuador
        </p>
      </div>

      {/* Línea decorativa izquierda */}
      <div className="absolute left-10 bottom-0 w-[1px] h-32 bg-white/10 z-20"></div>
    </section>
  );
}