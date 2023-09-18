import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      screens: {
        xs: '540px', // min-width
      },
    },
    extend: {
      colors: {
        primary: '#4589fb',
        secondary: '#11b511',
      },
    },
  },
  plugins: [],
};
export default config;
