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
        // Direction B editorial palette: warm paper, ink, one burnt-orange accent
        paper: {
          DEFAULT: '#FAF7F2',
          sunk: '#F3EEE6',
        },
        ink: {
          DEFAULT: '#1C1917',
          soft: '#44403C',
        },
        rule: '#E7DFD3',
        accent: {
          DEFAULT: '#9A4B12',
          dark: '#6B3208',
        },
        // Greys are darkened just enough to clear 4.5:1 on paper
        muted: {
          DEFAULT: '#57534E',
          faint: '#6B655F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        'editorial': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
