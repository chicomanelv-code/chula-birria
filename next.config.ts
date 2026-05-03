import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configuración para omitir errores de TS/Lint en el despliegue */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Turbopack a veces tiene conflictos con GSAP, desactivamos experimental si es necesario
  experimental: {
    turbo: {
      // Configuraciones específicas si usas Turbopack
    }
  }
};

export default nextConfig;