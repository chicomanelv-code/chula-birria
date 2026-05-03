"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"; // Hook para navegación
import { Playfair_Display } from "next/font/google";
import { X, ShoppingBag } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function CartSidebar() {
  const { cart, totalPrice, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const sendOrder = () => {
    if (cart.length === 0) return;

    // Estructuramos el mensaje para WhatsApp
    const itemsText = cart
      .map((item) => `- ${item.quantity}x ${item.name} ($${item.price})`)
      .join("%0A");
    
    const message = `¡Hola Chula Birria! 👋 Me gustaría hacer este pedido:%0A%0A${itemsText}%0A%0ATotal: $${totalPrice.toFixed(2)}`;
    
    // 1. Abrimos WhatsApp en pestaña nueva
    window.open(`https://wa.me/593983760304?text=${message}`, "_blank");
    
    // 2. Limpiamos el carrito
    clearCart();

    // 3. Redirigimos a la página de éxito
    router.push("/gracias");
  };

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] bg-white p-7 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-80 border border-gray-100 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingBag className="text-brand-red w-5 h-5" />
        <h4 className={`${playfair.className} text-2xl text-black font-bold`}>Tu Pedido</h4>
      </div>
      
      <div className="max-h-60 overflow-y-auto mb-6 pr-2 custom-scrollbar">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4 text-[11px] text-black/70 border-b border-gray-50 pb-3">
            <div className="flex flex-col">
              <span className="font-bold text-black uppercase tracking-wider">{item.name}</span>
              <span>Cant: {item.quantity}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-black">${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-brand-red hover:scale-125 transition-transform">
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto border-t border-gray-100 pt-5">
        <div className="flex justify-between font-black text-black text-xl mb-6">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <button 
          onClick={sendOrder}
          className="w-full bg-[#E31D1C] text-white py-4 rounded-full text-[10px] font-black uppercase tracking-[0.25em] shadow-xl shadow-red-100 hover:bg-black transition-all duration-500 active:scale-95"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}