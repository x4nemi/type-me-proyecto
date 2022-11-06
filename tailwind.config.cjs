/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Mulish", "sans-serif"],
            // serif: ["Merriweather", "serif"],
            // mono: ["JetBrains Mono", "monospace"],
        },
        container: {
            center: true,
            padding: 0,
            margin: 0,
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["night", "winter"],
    },
};
