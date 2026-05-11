import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFBF5",
          100: "#FDF6EC",
          200: "#F9ECD8",
        },
        beige: {
          100: "#F5E8D6",
          200: "#EBD7BC",
          300: "#D9BFA0",
        },
        coral: {
          100: "#FCE4DC",
          200: "#F9C9BD",
          300: "#F4A795",
          400: "#EC8A75",
          500: "#E07058",
        },
        peach: {
          100: "#FFE7D6",
          200: "#FFD3B3",
          300: "#FFBC8A",
        },
        cocoa: {
          400: "#A78670",
          500: "#8B6B55",
          600: "#6E5240",
          700: "#5A3F30",
        },
      },
      fontFamily: {
        sans: [
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "Meiryo",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(180, 120, 90, 0.18)",
        "soft-lg": "0 16px 40px -12px rgba(180, 120, 90, 0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
