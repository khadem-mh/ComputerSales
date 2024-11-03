import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
