/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        background: "#f4f4f4",
        foreground: "#83858b",
        border: "#D1D5DB",

        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        primary: {
          background: "#fff",
          foreground: "#83858b",
        },

        secondary: {
          DEFAULT: "#212529",
          foreground: "#83858b",
        },

        custom: {
          pinkBg: "#fedfe1",
          grayBg: "#E5E7EB",
          tealBg: "#b2eecf",
          pinkClr: "#901e75",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        custom: ["Nunito Sans", "sans"],
      },
      fontWeight: {
        primary: 700,
        secondary: 400,
        bolder: 900,
      },
      fontSize: {
        xxs: "9px",
        xs: "12px",
        sm: "14px",
        default: "16px",
        md: "22px",
        lg: "28px",
        xl: "90px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
