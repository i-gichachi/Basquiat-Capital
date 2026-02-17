import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                lg: '3rem',
            },
        },
        extend: {
            colors: {
                basquiat: {
                    navy: {
                        DEFAULT: "#0B2545", // Hero bg, dark sections
                        darker: "#060F1E",  // Stats bar, footer
                        darkest: "#040C18", // Footer bottom strip
                    },
                    gold: "#F0B429",      // Accents ONLY
                    blue: "#1B5FA8",      // Buttons, links
                    white: "#E8E4DC",     // "Off-white" -> Text on dark backgrounds
                    "warm-white": "#F8F7F4", // Light section backgrounds
                    "pure-white": "#FFFFFF", // Nav background when scrolled
                    black: "#0A0A0A",     // "Near-black" -> Text on light backgrounds
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-cormorant)", "serif"],
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
