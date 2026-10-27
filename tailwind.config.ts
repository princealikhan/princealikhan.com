import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      pixel: ["var(--font-pixel)", "monospace"],
    },
    extend: {
      colors: {
        ink: "var(--ink)",
        blue: {
          900: "var(--blue-900)",
          700: "var(--blue-700)",
          500: "var(--blue-500)",
          100: "var(--blue-100)",
        },
      },
    },
  },
} satisfies Config;
