// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chula Birria | Sabor Auténtico Mexicano",
  description: "Disfruta de la mejor birria de res en Cuenca, Ecuador.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. Añadimos suppressHydrationWarning aquí para evitar errores por extensiones
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}