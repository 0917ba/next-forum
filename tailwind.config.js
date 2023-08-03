/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "typography",
    }),
  ],
};
