// data/Menu.ts
export interface MenuItem {
  id: number;
  name: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  isRecommended?: boolean;
}

export const menuData: MenuItem[] = [
  // --- ESPECIALIDADES DE BIRRIA ---
  { id: 1, name: "Quesabirrias (3 unidades)", price: 9.48, description: "Tortillas de maíz con queso derretido, birria de res, cebolla y cilantro. Incluye consomé.", category: "Birria", image: "/images/quesabirria.webp", isRecommended: true },
  { id: 2, name: "Burro de Birria", price: 9.00, description: "Tortilla de harina gigante, arroz rojo, frijoles refritos, queso y lechuga. Incluye consomé.", category: "Birria", image: "/images/burro.webp", isRecommended: true },
  { id: 3, name: "Tacos de Birria (3 unidades)", price: 7.50, description: "Tacos suaves de maíz con birria, cebolla y cilantro. Incluye consomé.", category: "Birria", image: "/images/tacos-birria.webp", isRecommended: true },

  // --- PLATOS FUERTES Y NUEVOS ---
  { id: 4, name: "Camarones con Mole", price: 13.98, description: "Camarones salteados bañados en Mole artesanal con arroz rojo y 3 tortillas.", category: "Platos Fuertes", image: "/images/camarones.webp" },
  { id: 5, name: "Pozole Rojo", price: 9.48, description: "Caldo de maíz cacahuazintle con cerdo y pollo. Servido con lechuga, rábano y tostadas.", category: "Platos Fuertes", image: "/images/pozole.webp" },

  // --- MENÚ INFANTIL ---
  { id: 6, name: "Mini Flautas", price: 6.85, description: "Tortillas enrolladas fritas rellenas de pollo, queso, lechuga y crema.", category: "Menú Infantil", image: "/images/mini-flautas.webp" },
  { id: 7, name: "Papas a la Mexicana", price: 6.50, description: "Papas fritas gratinadas con queso, carne estilo Chula Birria y guacamole.", category: "Menú Infantil", image: "/images/papas.webp" },
  { id: 8, name: "Quesadillas", price: 4.99, description: "Tortillas de trigo con queso derretido, acompañado de mayonesa y guacamole.", category: "Menú Infantil", image: "/images/quesadilla.webp" },

  // --- POSTRES ---
  { id: 9, name: "Crumble de Manzana", price: 3.98, description: "Masa quebrada con manzana caramelizada, helado de vainilla y curd de limón.", category: "Postres", image: "/images/crumble.webp" },
  { id: 10, name: "Flan Mexicano", price: 3.54, description: "Postre típico de leche acompañado de almíbar de frutilla.", category: "Postres", image: "/images/flan.webp" },
  { id: 11, name: "Cheesecake", price: 3.75, description: "Delicioso cheesecake de la casa preparado con varios quesos.", category: "Postres", image: "/images/cheesecake.webp" },
  { id: 12, name: "Helado con Tostadas", price: 3.25, description: "Helado de vainilla servido a la mexicana con totopos y canela.", category: "Postres", image: "/images/helado-canela.webp" },

  // --- BEBIDAS SIN ALCOHOL ---
  { id: 13, name: "Horchata Mexicana", price: 2.80, description: "Bebida tradicional de arroz con canela y leche.", category: "Bebidas", image: "/images/horchata.webp" },
  { id: 14, name: "Horchata de Fresa", price: 2.90, description: "Bebida de arroz con canela y leche licuada con fresas.", category: "Bebidas", image: "/images/horchata-fresa.webp" },
  { id: 15, name: "Jamaica Original", price: 2.50, description: "Agua fresca de flor de Jamaica natural.", category: "Bebidas", image: "/images/jamaica.webp" },
  { id: 16, name: "Jamaica de Fresa", price: 2.75, description: "Agua fresca de flor de Jamaica licuada con fresas.", category: "Bebidas", image: "/images/jamaica-fresa.webp" },
  { id: 17, name: "Limonada Original", price: 2.50, description: "Limonada natural refrescante.", category: "Bebidas", image: "/images/limonada.webp" },
  { id: 18, name: "Limonada Imperial", price: 2.75, description: "Limonada especial de la casa.", category: "Bebidas", image: "/images/limonada-imperial.webp" },
  { id: 19, name: "Limonada de Pitahaya", price: 2.98, description: "Limonada exótica con pitahaya.", category: "Bebidas", image: "/images/limonada-pitahaya.webp" },
  { id: 20, name: "Limonada de Jamaica", price: 2.75, description: "Mezcla refrescante de limón y flor de Jamaica.", category: "Bebidas", image: "/images/limonada-jamaica.webp" },
  { id: 21, name: "Milkshake", price: 3.50, description: "Batido cremoso, varios sabores disponibles.", category: "Bebidas", image: "/images/milkshake.webp" },
  { id: 22, name: "Jugo de Frutas", price: 2.35, description: "Jugos naturales de temporada.", category: "Bebidas", image: "/images/jugo.webp" },
  { id: 23, name: "Sodas (Colas)", price: 1.68, description: "Variedad de refrescos.", category: "Bebidas", image: "/images/soda.webp" },
  { id: 24, name: "Coca Cola / Sprite", price: 1.88, description: "Refrescos específicos de marca.", category: "Bebidas", image: "/images/coca-cola.webp" },

  // --- BEBIDAS CON ALCOHOL ---
  { id: 25, name: "Margarita", price: "6.50 - 7.50", description: "Cóctel clásico (Jamaica, Tamarindo o Limón).", category: "Bebidas", image: "/images/margarita.webp" },
  { id: 26, name: "Cerveza Modelo", price: 4.50, description: "Cerveza mexicana Modelo Especial (355ml).", category: "Bebidas", image: "/images/modelo.webp" },
  { id: 27, name: "Cerveza Corona", price: 4.50, description: "Cerveza mexicana tradicional.", category: "Bebidas", image: "/images/corona.webp" },

  // --- PORCIONES Y EXTRAS ---
  { id: 28, name: "Guacamole", price: 2.38, description: "Porción de guacamole fresco.", category: "Extras", image: "/images/guacamole.webp" },
  { id: 29, name: "Frijol Refrito", price: 1.98, description: "Porción de frijoles refritos tradicionales.", category: "Extras", image: "/images/frijoles.webp" },
  { id: 30, name: "Arroz Rojo", price: 1.98, description: "Porción de arroz rojo tradicional.", category: "Extras", image: "/images/arroz.webp" },
  { id: 31, name: "Tortillas (3 unidades)", price: 1.75, description: "Tortillas de maíz o harina adicionales.", category: "Extras", image: "/images/tortillas.webp" }
];