/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brandDark: "#3C467B",
        brandMid: "#50589C",
        brandSoft: "#636CCB",
        brandAccent: "#6E8CFB",
      },
      boxShadow: {
        premium: '0 10px 30px rgba(99,108,203,0.16)',
        cardGlow: '0 4px 20px rgba(99,108,203,0.25)',
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};
