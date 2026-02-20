"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) { // Changed threshold to 80px as requested
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const links = [
        { name: "About", href: "/about" },
        { name: "Founder", href: "/founder" },
        { name: "Process", href: "/process" },
        { name: "Mandates", href: "/offerings" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out",
                scrolled && !isOpen
                    ? "bg-basquiat-pure-white border-b border-[#F0F0F0] py-4 shadow-sm"
                    : isOpen
                        ? "bg-transparent py-4"
                        : "bg-white/75 backdrop-blur-md py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center group relative z-50">
                        {/* Logo Pill for visibility on dark backgrounds if generic logo - utilizing specific instructions */}
                        <div className={cn(
                            "relative h-10 w-32 md:h-12 md:w-44 transition-all duration-300 pointer-events-none",
                            // Removed the pill background for a cleaner look
                        )}>
                            <Image
                                src="/images/logo-color.png"
                                alt="Basquiat Capital"
                                fill
                                className={cn(
                                    "transition-all duration-300",
                                    isOpen ? "invert" : ""
                                )}
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[13px] uppercase tracking-[0.08em] font-medium transition-colors duration-300 relative group text-basquiat-black",
                                )}
                            >
                                {link.name}
                                {/* Hover Underline Effect */}
                                <span className="absolute bottom-0 left-0 h-px w-0 bg-basquiat-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={cn(
                                "px-6 py-2.5 text-[13px] uppercase tracking-[0.08em] font-medium transition-all duration-300 border",
                                "px-6 py-2.5 text-[13px] uppercase tracking-[0.08em] font-medium transition-all duration-300 border",
                                "border-basquiat-navy text-basquiat-navy hover:bg-basquiat-navy hover:text-white"
                            )}
                        >
                            Request a Meeting
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors relative z-50",
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {/* Custom Hamburger / Close Icon */}
                        {isOpen ? (
                            <X size={24} className="text-basquiat-gold" />
                        ) : (
                            // 3 horizontal lines, gold color #F0B429, size 24px
                            <div className="flex flex-col gap-[6px] w-[24px]">
                                <span className="w-full h-[2px] bg-basquiat-gold"></span>
                                <span className="w-full h-[2px] bg-basquiat-gold"></span>
                                <span className="w-full h-[2px] bg-basquiat-gold"></span>
                            </div>
                        )}
                    </button>
                </div>
            </div >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-basquiat-navy/95 z-40 flex flex-col items-center justify-center"
                        >
                            <div className="flex flex-col items-center space-y-6">
                                {links.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.15, duration: 0.5 }} // Staggered delay 150ms
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-3xl font-serif font-light text-basquiat-white hover:text-basquiat-gold transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: links.length * 0.15 + 0.1 }}
                                    className="pt-8"
                                >
                                    <Link
                                        href="/contact"
                                        className="px-6 py-3 border border-basquiat-gold text-basquiat-gold text-xs uppercase tracking-widest hover:bg-basquiat-gold hover:text-basquiat-black transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Request a Meeting
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </nav >
    );
}
