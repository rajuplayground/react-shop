/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'cursive': "DynaPuff, cursive",
            },
            screens: {
                'xsm': '450px',
                'xmd': '600px',
                'xlg': '900px',
            },
        },
    },
    plugins: [],
}
