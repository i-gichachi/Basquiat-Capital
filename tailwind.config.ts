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
                // Primary brand colors
                'basquiat-navy': '#0B2545',   // Primary dark — navigation, hero, dark sections
                'basquiat-navy-darker': '#0D2032',   // Stats bar, slightly deeper than navy
                'basquiat-navy-deepest': '#071A33',   // Footer — grounds the page
                'basquiat-gold': '#F0B429',   // Primary accent — CTAs, icons, highlights
                'basquiat-gold-deep': '#D4971E',   // Gold hover state — prevents flat look
                'basquiat-black': '#0A0A0A',   // Near-black for text
                'basquiat-white': '#FFFFFF',   // Pure white — text on dark

                // Background surfaces — light
                'basquiat-bg-primary': '#FAFAFA',   // Main light background — replaces warm cream
                'basquiat-bg-secondary': '#F4F4F5',   // Subtle section divider on light
                'basquiat-bg-card': '#FFFFFF',   // Cards on light backgrounds

                // Background surfaces — dark
                'basquiat-card-dark': '#0D2E57',   // Cards on dark/navy backgrounds — creates lift

                // Text
                'basquiat-text-primary': '#0B2545',   // Headings on light
                'basquiat-text-body': '#4B5563',   // Body copy on light — refined grey
                'basquiat-text-muted': '#9CA3AF',   // Captions, labels on light

                // Legacy aliases — keep these so other pages don't break
                'basquiat-blue': '#0B2545',
                'basquiat-pure-white': '#FFFFFF',
                'basquiat-warm-white': '#FAFAFA',   // Reassigned to crisp neutral
                'basquiat-navy-darkest': '#071A33',   // Legacy support for Footer
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
