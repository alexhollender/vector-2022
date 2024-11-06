import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      medium: "1120px",
      large: "1680px",
    },
    extend: {
      colors: {
        "text-base": "var(--color-text-base)",
        "text-subtle": "var(--color-text-subtle)",
        "background-base": "var(--color-background-base)",
        "background-disabled": "var(--color-background-disabled)",
        "background-progressive-subtle":
          "var(--color-background-progressive-subtle)",
        progressive: "var(--color-progressive)",
        "progressive-hover": "var(--color-progressive-hover)",
        border: "var(--color-border)",
        "border-interactive": "var(--color-border-interactive)",
        background: {
          subtle: "var(--color-background-subtle)",
          gray: "var(--color-background-gray)",
        },
        visited: "var(--color-visited)",
      },
    },
  },
  plugins: [],
};

export default config;
