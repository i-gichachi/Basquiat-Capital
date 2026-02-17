import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                basquiat: {
                    black: "#1a1a1a", // Example dark color
                    white: "#f5f5f5", // Example light color
                    blue: "#003B5C",  // Deep Institution Blue
                    gold: "#FFC72C",  // Vibrant Crown Gold
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            borderRadius: {
                none: "0",
                sm: "0.125rem",
            },
        },
    },
    plugins: [],
};
export default config;
