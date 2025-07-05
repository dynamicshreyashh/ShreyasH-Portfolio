import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Add this for dark mode support
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", ...defaultTheme.fontFamily.sans],
        title: ["Cabinet Grotesk", ...defaultTheme.fontFamily.sans],
        sans: ["General Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#FF3D00", // Ayushi's vibrant orange
          dark: "#FF6D40",    // Lighter orange for dark mode
          50: "#FFF5F2",
          100: "#FFE5DB",
          200: "#FFC7B3",
          300: "#FFA88A",
          400: "#FF7A47",
          500: "#FF3D00", // Main primary color
          600: "#E03600",
          700: "#B32B00",
          800: "#8C2200",
          900: "#661900",
        },
        secondary: {
          DEFAULT: "#00B0FF", // Ayushi's blue accent
          dark: "#33C1FF",
          50: "#E6F7FF",
          100: "#CCEEFF",
          200: "#99DDFF",
          300: "#66CCFF",
          400: "#33BBFF",
          500: "#00B0FF",
          600: "#008ECC",
          700: "#006B99",
          800: "#004766",
          900: "#002433",
        },
        dark: {
          DEFAULT: "#1E1E1E", // Dark background
          light: "#2D2D2D",   // Lighter dark elements
        },
        light: {
          DEFAULT: "#F5F5F5", // Light background
          dark: "#E0E0E0",    // Darker light elements
        },
        // Keeping your existing grayscale
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D1D5DB",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        }
      },
      spacing: {
        4.5: "1.125rem",
        18: "4.5rem",
        88: "22rem",
      },
      lineHeight: {
        tight: "1.25",
        relaxed: "1.75",
        loose: "2",
      },
      letterSpacing: {
        tighter: "-0.05em",
        snug: "-0.015em",
        medium: "0.015em",
        wide: "0.025em",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'spacing': 'margin, padding',
        'transform': 'transform',
      }
    },
  },
  plugins: [],
};