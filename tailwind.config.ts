import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(220 13% 9%)",
        foreground: "hsl(220 9% 86%)",
        primary: {
          DEFAULT: "hsl(220 91% 60%)",
          foreground: "hsl(220 13% 9%)",
        },
        secondary: {
          DEFAULT: "hsl(220 13% 14%)",
          foreground: "hsl(220 9% 86%)",
        },
        muted: {
          DEFAULT: "hsl(220 13% 14%)",
          foreground: "hsl(220 9% 60%)",
        },
        accent: {
          DEFAULT: "hsl(260 60% 55%)",
          foreground: "hsl(220 9% 86%)",
        },
        border: "hsl(220 13% 18%)",
        card: {
          DEFAULT: "hsl(220 13% 11%)",
          foreground: "hsl(220 9% 86%)",
        },
        destructive: {
          DEFAULT: "hsl(0 62.8% 50%)",
          foreground: "hsl(220 9% 86%)",
        },
        success: "hsl(142 70% 45%)",
        warning: "hsl(38 92% 55%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, hsl(220 91% 60%) 0%, hsl(260 70% 60%) 100%)",
        "gradient-hero":
          "linear-gradient(135deg, hsl(220 13% 9%) 0%, hsl(220 13% 11%) 50%, hsl(220 13% 13%) 100%)",
        "gradient-card":
          "linear-gradient(135deg, hsl(220 13% 11%) 0%, hsl(220 13% 13%) 100%)",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.3)",
        button: "0 4px 16px rgba(59, 130, 246, 0.25)",
        glow: "0 0 40px rgba(77, 121, 255, 0.15)",
        "glow-lg": "0 0 80px rgba(77, 121, 255, 0.2)",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(77, 121, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(77, 121, 255, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
