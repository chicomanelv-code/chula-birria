import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#1A1A1A',
        'brand-red': '#D32F2F',
        'brand-yellow': '#FFC107',
        'brand-green': '#4CAF50',
        'brand-orange': '#FF9800',
      },
      fontFamily: {
        // Actualizamos la variable a playfair y la familia a serif
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;