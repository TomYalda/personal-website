/** @type {import('tailwindcss').Config} */
const content = [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
const theme = {
    extend: {},
};
const plugins = [];

const config = {
    content,
    theme,
    plugins,
};

export default config;
