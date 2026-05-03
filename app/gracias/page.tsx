"use client";

import React, { useRef } from "react";
import Link from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Playfair_Display } from "next/font/google";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Gracias() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(() => {
    gsap.from(".thanks-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        
        <div className="thanks-content flex justify-center">
          <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/20">
            <CheckCircle2 className="text-brand-red w-10 h-10" />
          </div>
        </div>

        <div className="thanks-content space-y-4">
          <h1 className={`${playfair.className} text-5xl text-white uppercase tracking-tighter`}>
            ¡Pedido <br /> <span className="italic text-brand-red">Enviado!</span>
          </h1>
          <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] leading-relaxed">
            Hemos recibido tu mensaje en WhatsApp. En breve un miembro de nuestro equipo confirmará tu solicitud.
          </p>
        </div>

        <div className="thanks-content pt-8">
          <button 
            onClick={() => router.push("/")}
            className="group flex items-center justify-center gap-3 w-full border border-white/10 py-5 rounded-full text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
            Volver al Inicio
          </button>
        </div>
      </div>
    </main>
  );
}