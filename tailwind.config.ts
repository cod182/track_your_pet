import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      xs: '500px',
      xxs: '320px',
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
