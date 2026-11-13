/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "../../StudyBuddyHub-server/public-{routes,pages}.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        heading: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
