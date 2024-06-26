/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'my-custom-width': '23rem', // Replace 'my-custom-width' with your desired name
      },
      backgroundImage: {
        'background1': "url('Assets/hero_bg.jpg')", // Replace with your image URL
        'background2':"url('Assets/testimonials-bg.jpg')",
      },
    },
  },
  plugins: [],
}