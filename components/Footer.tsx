"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-basquiat-navy-darker border-t border-basquiat-gold/20 text-basquiat-white">
            {/* Upper Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="relative h-12 w-40 block">
                            <Image
                                src="/images/logo-color-light.png"
                                alt="Basquiat Capital"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                            />
                        </Link>
                        <p className="font-serif italic text-[17px] text-basquiat-white/40 mt-4 leading-relaxed">
                            Capital Moves. We Move First.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-basquiat-gold mb-5">
                            Navigation
                        </h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/about" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">About</Link>
                            <Link href="/offerings" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Mandates</Link>
                            <Link href="/process" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Process</Link>
                            <Link href="/founder" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Founder</Link>
                            <Link href="/faqs" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">FAQs</Link>
                            <Link href="/contact" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-basquiat-gold mb-5">
                            Legal
                        </h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/legal/terms" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Terms of Use</Link>
                            <Link href="/legal/privacy" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Privacy Policy</Link>
                            <Link href="/legal/risk-disclosure" className="font-sans text-[13px] text-basquiat-white/45 hover:text-basquiat-white transition-colors">Risk Disclosure</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Footer */}
            <div className="bg-basquiat-navy-darkest border-t border-white/5 py-8 px-6 md:px-24">

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <p className="font-sans text-[11px] text-basquiat-white/25">
                        &copy; {currentYear} Basquiat Capital. All rights reserved.
                    </p>
                    <a
                        href="https://www.trustpilot.com/review/basquiatcapital.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[11px] text-basquiat-white/25 hover:underline decoration-basquiat-gold/50 underline-offset-4"
                    >
                        See our reviews on Trustpilot
                    </a>
                </div>
            </div>
        </footer>
    );
}
