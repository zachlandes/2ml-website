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
        primary: {
          DEFAULT: '#0B3D91', // deep navy
          50: '#E6ECF2',
          100: '#CCE0FF',
          200: '#99B3FF',
          300: '#6685FF',
          400: '#3366FF',
          500: '#0B3D91', // our main brand color
          600: '#082E6E',
          700: '#051F4B',
          800: '#031028',
          900: '#010205',
        },
        accent: {
          DEFAULT: '#F28C28', // warm accent
          50: '#FDF1E7',
          100: '#FCE3CF',
          200: '#FAC79F',
          300: '#F7AB6F',
          400: '#F28C28',
          500: '#D97116',
          600: '#B35604',
          700: '#8C3B02',
          800: '#662001',
          900: '#400500',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
