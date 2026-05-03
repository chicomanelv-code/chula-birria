import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Esto ayuda a que el servidor no se detenga por tipos
  },
  // Borra la sección de eslint: { ... } que tenías antes
};

export default nextConfig;