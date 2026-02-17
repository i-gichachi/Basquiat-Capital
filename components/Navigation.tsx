"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "About", href: "/about" },
        { name: "Offerings", href: "/offerings" },
        { name: "Insights", href: "/blog" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
            <div className="container-padding mx-auto max-w-7xl">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
                        <div className="relative h-12 w-48">
                            <Image
                                src="/logo.png"
                                alt="Basquiat Capital"
                                fill
                                className="object-contain transition-all duration-300"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-basquiat-black font-medium hover:text-basquiat-gold transition-colors duration-300 uppercase text-sm tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-basquiat-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg">
                    <div className="flex flex-col space-y-4 p-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-basquiat-black font-medium hover:text-basquiat-gold transition-colors duration-300 uppercase text-sm tracking-wider"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
