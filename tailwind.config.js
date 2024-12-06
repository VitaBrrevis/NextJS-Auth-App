/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Включаем все файлы в папке src
    './src/shared/**/*.{js,ts,jsx,tsx}', // Включаем папку shared
    './src/app/**/*.{js,ts,jsx,tsx}', // Включаем app директорию (если используете Next.js)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
