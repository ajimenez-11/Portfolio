/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Personal palette (see colores.txt)
        brand: {
          300: "#C084FC",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        ink: {
          50: "#F7F7FB",
          100: "#EEEEF6",
          800: "#16151F",
          900: "#0E0D16",
          950: "#09080F",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
