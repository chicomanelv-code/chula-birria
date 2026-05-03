# Chula Birria - Boutique Web Experience

Este es un proyecto de desarrollo web de alto rendimiento creado con **Next.js** para el restaurante **Chula Birria** en Cuenca, Ecuador. El sitio ofrece una experiencia inmersiva con animaciones avanzadas, gestión de pedidos en tiempo real y una interfaz "Dark Mode" elegante.

## 🚀 Tecnologías Utilizadas

*   **Framework:** [Next.js 16.2.4 (App Router)](https://nextjs.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animaciones:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
*   **Iconografía:** [Lucide React](https://lucide.dev/)
*   **Tipografía:** Google Fonts (Playfair Display)

## 📦 Instalación y Configuración

Sigue estos pasos para ejecutar el código en tu entorno local (WSL/Ubuntu):

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/chula-birria.git
   cd chula-birria
Instalar dependencias:

Bash

npm install
Configurar activos multimedia:
Asegúrate de contar con los siguientes archivos en la carpeta /public:

/public/logo.png: Logo principal de la marca.

/public/videos/food.mp4: Video de fondo para la sección de contacto.

/public/og-image.jpg: Imagen para previsualización en redes sociales.

Ejecutar el servidor de desarrollo:

Bash

npm run dev
La aplicación estará disponible en http://localhost:3000.

🛠️ Estructura del Proyecto
/app: Contiene las rutas y páginas principales (page.tsx, layout.tsx, /gracias).

/components: Componentes modulares de React (Navbar, Menu, Contact, MapSection, etc.).

/context: Lógica de estado global para el carrito de compras (CartContext.tsx).

/public: Archivos estáticos como imágenes, videos y fuentes locales.

✨ Características Principales
Menú Interactivo: Filtrado y selección de productos con animaciones de revelado.

Carrito de Compras: Persistencia de datos y cálculo automático de totales.

Integración con WhatsApp: Envío de pedidos y reservas estructuradas directamente al comercio.

Mapa Personalizado: Integración de Google Maps con filtros CSS para modo oscuro boutique.

Diseño Responsivo: Optimizado para dispositivos móviles y escritorio.

📝 Notas de Desarrollo
GSAP ScrollTrigger: Se utiliza para activar animaciones basadas en el desplazamiento del usuario.

Next.js Image: Optimización automática de imágenes para mejorar el Core Web Vitals.

Boutique UI: Uso de filtros de inversión y escala de grises para mantener la coherencia estética de la marca.

Desarrollado por Francisco Rodriguez - 2026