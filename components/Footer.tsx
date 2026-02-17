"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-basquiat-black text-white pt-16 pb-8 border-t-4 border-basquiat-gold">
            <div className="container-padding mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold uppercase mb-6 tracking-wider">Basquiat Capital</h2>
                        <p className="text-gray-400 max-w-md">
                            Providing sophisticated wealth management strategies for individuals and institutions.
                            Our commitment to excellence and integrity drives every decision we make.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-basquiat-gold">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-smooth">About Us</Link></li>
                            <li><Link href="/offerings" className="text-gray-400 hover:text-white transition-smooth">Our Mandates</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-smooth">Market Insights</Link></li>
                            <li><Link href="/faqs" className="text-gray-400 hover:text-white transition-smooth">FAQs</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-smooth">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-basquiat-gold">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>info@basquiat.capital</span>
                            </li>
                            <li>30 N Gould St</li>
                            <li>Sheridan, WY 82801, USA</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center text-center space-y-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Basquiat Capital. All rights reserved.
                        <span className="mx-2">|</span>
                        <Link href="/legal-notice" className="hover:text-white transition-colors">
                            Legal Notice
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
