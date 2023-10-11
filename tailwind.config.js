/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "title-color": "#040404",
      "text-color": "#555",
    },
    fontFamily: {
      godoB: ["var(--font-godo)"],
      pretendard: ["var(--font-pretendard)"],
    },
  },
  plugins: [],
};
