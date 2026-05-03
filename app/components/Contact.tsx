"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display } from "next/font/google";
import { Clock, MapPin, Gift, CalendarDays } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    guests: "2",
    date: "",
    isBirthday: false,
  });

  useGSAP(() => {
    gsap.from(".contact-item", {
      scrollTrigger: {
        trigger: ".contact-item",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const bdayText = formData.isBirthday ? "%0A🎂 ¡Es para un CUMPLEAÑOS!" : "";
    const message = `¡Hola Chula Birria! 👋 Reserva solicitada:%0A%0A- Nombre: ${formData.name}%0A- Personas: ${formData.guests}%0A- Fecha: ${formData.date}${bdayText}`;
    
    window.open(`https://wa.me/593983760304?text=${message}`, "_blank");
    
    // Redirección inmediata a la página de éxito
    router.push("/gracias");
  };

  return (
    <section ref={containerRef} id="contacto" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-black">
      {/* Fondo de Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 brightness-[0.4]">
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="contact-item space-y-10 text-center lg:text-left">
            <h2 className={`${playfair.className} text-7xl md:text-9xl text-white uppercase tracking-tighter leading-[0.8]`}>
              Reserva <br /> <span className="italic text-brand-red">Tu Mesa</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-4">
                <MapPin className="text-brand-red" size={20} />
                <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Cuenca, Ecuador</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-brand-red" size={20} />
                <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Mar-Sáb: 12pm - 10pm</span>
              </div>
            </div>
          </div>

          <div className="contact-item bg-white/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <form onSubmit={handleReservation} className="space-y-6">
              <div className="space-y-2">
                <label className="text-white/40 text-[9px] uppercase tracking-[0.3em] ml-4 font-bold">Nombre</label>
                <input required type="text" className="w-full bg-black/40 border border-white/5 rounded-full px-8 py-4 text-white focus:outline-none focus:border-brand-red transition-all" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/40 text-[9px] uppercase tracking-[0.3em] ml-4 font-bold">Invitados</label>
                  <select className="w-full bg-black/40 border border-white/5 rounded-full px-8 py-4 text-white appearance-none focus:outline-none" onChange={(e) => setFormData({...formData, guests: e.target.value})}>
                    {[2, 4, 6, 8, 10].map(n => <option key={n} value={n} className="bg-black">{n} Personas</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-white/40 text-[9px] uppercase tracking-[0.3em] ml-4 font-bold">Fecha</label>
                  <input required type="date" className="w-full bg-black/40 border border-white/5 rounded-full px-8 py-4 text-white focus:outline-none focus:border-brand-red" onChange={(e) => setFormData({...formData, date: e.target.value})} />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setFormData({...formData, isBirthday: !formData.isBirthday})}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${formData.isBirthday ? 'border-brand-red bg-brand-red/10' : 'border-white/5 bg-white/5'}`}
              >
                <div className="flex items-center gap-4">
                  <Gift className={formData.isBirthday ? 'text-brand-red' : 'text-white/20'} />
                  <span className="text-[10px] uppercase tracking-widest text-white">¿Es tu cumpleaños?</span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.isBirthday ? 'border-brand-red bg-brand-red' : 'border-white/10'}`}>
                  {formData.isBirthday && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </button>

              <button type="submit" className="w-full bg-brand-red text-white py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black transition-all duration-700 shadow-2xl shadow-brand-red/20">
                Confirmar Reserva
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}