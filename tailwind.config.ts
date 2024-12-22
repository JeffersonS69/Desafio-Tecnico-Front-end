import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        orangePerso: "#ff5945",
        orangePerso100: "#ff4a36",
        whitePerso: "#edeef0",
      },
      outlineColor: {
        orangePerso: "#ff5945",
      },
    },
  },
  plugins: [],
} satisfies Config;
