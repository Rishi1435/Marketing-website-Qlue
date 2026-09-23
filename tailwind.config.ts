import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qlue: {
          black: "#000000",
          surface: "#101010",
          surface2: "#1A1A1A",
          green: "#34D399",
          green2: "#30D158",
          forest: "#2F4C44",
          forestlight: "#305148",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#A3A3A3",
          faint: "#525252",
        },
        module: {
          resume: "#0A84FF",
          hr: "#FF375F",
          website: "#5E5CE6",
          intro: "#30D158",
          jobmatch: "#FF9F0A",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-montserrat)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
