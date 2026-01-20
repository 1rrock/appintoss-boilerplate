import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/client/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF', // Toss blue style
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F2F4F6',
          foreground: '#1A1F27',
        },
        muted: {
          DEFAULT: '#F2F4F6',
          foreground: '#6B7684',
        },
      },
    },
  },
  plugins: [],
};

export default config;
