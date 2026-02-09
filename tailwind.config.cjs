/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                burgundy: {
                    DEFAULT: '#8B0D2E',
                    light: '#A91D4A',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#E8C967',
                },
                cream: {
                    DEFAULT: '#FDF8F3',
                    dark: '#F5EDE3',
                },
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
