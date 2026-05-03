// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import Menu from "./components/Menu";
import Contact from "./components/Contact"; // IMPORTACIÓN POR DEFECTO (Sin llaves { })
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer"; // IMPORTACIÓN NOMBRADA (Con llaves { })
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <main className="bg-brand-black relative">
      <Navbar />
      <Hero />
      <History />
      <Menu />
      <Contact />
      
      {/* Añadimos el mapa aquí */}
      <MapSection /> 

      <Footer />
      <CartSidebar />
    </main>
  );
}