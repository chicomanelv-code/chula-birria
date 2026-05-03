import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chula Birria | Boutique Experience",
  description: "Sabor tradicional con tecnología de vanguardia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-black antialiased text-white`}>
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}