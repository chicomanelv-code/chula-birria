import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chula Birria | Sabor Mexicano en Cuenca",
  description: "La mejor birria artesanal de Cuenca, Ecuador. Tradición y fuego lento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-black antialiased`}>
        {/* El CartProvider permite que el Menú y el Carrito hablen entre sí */}
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}