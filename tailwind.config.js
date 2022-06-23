/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
              // ツイッター用の色
              colors: {
                'twitter': '#1DA1F2',
              }
    },
  },
  plugins: [],
}