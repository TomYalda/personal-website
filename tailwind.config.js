import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        background: "#e9f3ff",
                        foreground: "#364fab",
                    },
                },
                dark: {
                    colors: {
                        background: "#0e1117",
                        foreground: "#4da3ff",
                    },
                },
            },
        }),
    ],
};

export default config;