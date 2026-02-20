import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google"; // [MODIFIED] Added Cormorant_Garamond
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";

// [MODIFIED] Configure fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600"]
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
    title: "Basquiat Capital | Institutional Investment & Capital Advisory",
    description:
        "Basquiat Capital is a research-driven institutional investment firm. Alpha-focused hedge fund, commercial FX, and capital market advisory across Sub-Saharan Africa and global markets.",
    keywords: [
        "institutional investment",
        "hedge fund",
        "capital advisory",
        "commercial FX",
        "Sub-Saharan Africa",
        "East Africa",
        "institutional capital",
        "Basquiat Capital",
    ],
    authors: [{ name: "Basquiat Capital" }],
    creator: "Basquiat Capital",
    metadataBase: new URL("https://basquiatcapital.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://basquiatcapital.com",
        siteName: "Basquiat Capital",
        title: "Basquiat Capital | Institutional Investment & Capital Advisory",
        description:
            "Research-driven institutional investment firm. Alpha-focused hedge fund, commercial FX, and capital market advisory.",
        images: [
            {
                url: "/images/hero_bg.jpg",
                width: 1200,
                height: 630,
                alt: "Basquiat Capital - Institutional Investment",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Basquiat Capital | Institutional Investment & Capital Advisory",
        description:
            "Research-driven institutional investment firm operating across Sub-Saharan Africa and global markets.",
        images: ["/images/hero_bg.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <head>
                <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="lazyOnload"
                />
                <Script
                    type="text/javascript"
                    src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                    strategy="afterInteractive"
                />
            </head>
            <body className="font-sans antialiased bg-basquiat-white text-basquiat-black selection:bg-basquiat-gold selection:text-basquiat-navy">
                <DisclaimerModal />
                <Navigation />
                <main className="min-h-screen pt-[80px]">
                    {children}
                </main>
                <Footer />
                <BackToTop />
            </body>
        </html>
    );
}
