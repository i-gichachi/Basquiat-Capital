import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google"; // [MODIFIED] Added Cormorant_Garamond
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import BackToTop from "@/components/BackToTop";

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
    title: "Basquiat Capital | Wealth Management & Investment",
    description: "Professional wealth management and investment services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <body className="font-sans antialiased bg-basquiat-white text-basquiat-black selection:bg-basquiat-gold selection:text-basquiat-navy">
                <Navigation />
                <DisclaimerModal />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <BackToTop />
            </body>
        </html>
    );
}
