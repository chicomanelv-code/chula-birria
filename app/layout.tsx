import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chula Birria | Sabor Mexicano",
  description: "Boutique de birria artesanal en Cuenca.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black antialiased`}>
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}