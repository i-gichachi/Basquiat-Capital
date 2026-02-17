"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQItem } from "@/components/FAQItem";

export default function FAQsPage() {
    const faqs = [
        {
            q: "Where does Basquiat Capital operate?",
            a: "We are a US-domiciled LLC with primary operations in Nairobi, Kenya. We serve clients and partners across East Africa (Kenya, Uganda, Tanzania, Rwanda, Ethiopia), the UK, and the United States, with growing coverage across West and Southern Africa."
        },
        {
            q: "Who is your typical client for Commercial FX?",
            a: "We typically work with corporates converting $500,000 or more per month. Below that threshold, the cost savings may not justify switching providers."
        },
        {
            q: "Does Basquiat Capital hold client funds?",
            a: "No. We connect corporates with our pool of FCA-regulated commercial FX providers who handle all execution, settlement, and compliance. We never touch client funds."
        },
        {
            q: "How much can I expect to save on FX?",
            a: "It depends on volumes and currency pairs, but corporates typically save 50-80% on FX conversion costs by moving from a bank to a specialist provider. On $2M monthly volume, that can mean $15,000-$25,000 saved per month."
        },
        {
            q: "What currencies do you support?",
            a: "Our institutional FX partners support 60+ currencies including major pairs (USD, EUR, GBP) and African currencies (KES, NGN, ZAR, UGX, TZS, and others depending on provider coverage)."
        },
        {
            q: "Who is your target for Capital Market Advisory?",
            a: "Mid-to-large enterprises in Sub-Saharan Africa with revenues above $1M, audited financials, and capital needs exceeding $10M in debt or equity. We focus on companies with a clear growth thesis and management teams ready for institutional scrutiny."
        },
        {
            q: "Are you a bank?",
            a: "No. Basquiat Capital is a business development consulting firm. We identify and profile companies to provide market intelligence to our partners."
        }
    ];

    return (
        <main className="min-h-screen bg-white text-basquiat-black">
            <div className="container mx-auto px-6 lg:px-12 pt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column - Sticky Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <ScrollReveal>
                            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-basquiat-blue">
                                Frequently Asked <br className="hidden lg:block" /> Questions
                            </h1>
                            <div className="w-12 h-1 bg-basquiat-gold mb-8"></div>
                            <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                                Clear insights into our global operations, compliance standards, and value delivery models.
                            </p>

                            <div className="hidden lg:block">
                                <p className="text-sm font-semibold uppercase tracking-widest text-basquiat-black mb-4">
                                    Need more details?
                                </p>
                                <a
                                    href="/contact"
                                    className="text-basquiat-blue hover:text-basquiat-gold transition-colors duration-300 font-medium flex items-center gap-2 group"
                                >
                                    Contact our team
                                    <span className="block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - FAQ List */}
                    <div className="lg:col-span-8">
                        <div className="border-t border-gray-200">
                            {faqs.map((faq, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <FAQItem question={faq.q} answer={faq.a} />
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Mobile Only CTA */}
                        <div className="mt-12 lg:hidden">
                            <a
                                href="/contact"
                                className="inline-block border border-basquiat-black text-basquiat-black px-8 py-3 font-medium hover:bg-basquiat-black hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
