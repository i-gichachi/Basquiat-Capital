"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalNoticePage() {
    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">
            {/* Header */}
            <section className="bg-basquiat-blue text-white py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Legal Notice</h1>
                        <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
                            Regulatory disclosures and terms of service for Basquiat Capital.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal>
                        <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-basquiat-gold">
                            <h2 className="text-2xl font-bold text-basquiat-blue mb-8 border-b border-gray-100 pb-4">Corporate Information</h2>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-50 pb-6">
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Business Name</div>
                                    <div className="md:col-span-2 text-basquiat-black font-semibold text-lg">Basquiat Capital</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-50 pb-6">
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Address</div>
                                    <div className="md:col-span-2 text-basquiat-black text-lg">30 N Gould St, Sheridan, Wyoming, 82801, United States</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-50 pb-6">
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Registered Company Name</div>
                                    <div className="md:col-span-2 text-basquiat-black text-lg">Basquiat Capital LLC</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-50 pb-6">
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Phone Number</div>
                                    <div className="md:col-span-2 text-basquiat-black text-lg">+1 (650) 525-2452</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-50 pb-6">
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Registration Location</div>
                                    <div className="md:col-span-2 text-basquiat-black text-lg">Wyoming</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Registered Office Address</div>
                                    <div className="md:col-span-2 text-basquiat-black text-lg">30 N Gould St Sheridan 82801</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/" className="inline-flex items-center gap-2 text-basquiat-blue font-semibold hover:text-basquiat-gold transition-colors">
                                <ArrowLeft className="w-5 h-5" /> Back to Home
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
