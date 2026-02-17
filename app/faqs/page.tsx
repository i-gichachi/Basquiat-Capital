"use client";

import { FadeUp, SlideLeft, GoldLine, Cascade } from "@/components/Animate";
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
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Column - Sticky Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <SlideLeft delay={0}>
                            <h1 className="font-serif text-[42px] leading-tight tracking-tight mb-6 text-basquiat-blue">
                                Frequently Asked <br className="hidden lg:block" /> Questions
                            </h1>
                        </SlideLeft>
                        <GoldLine delay={100} />
                        <FadeUp delay={200}>
                            <p className="font-sans text-[16px] text-gray-500 font-light leading-relaxed mb-8 mt-6">
                                Clear insights into our global operations, compliance standards, and value delivery models.
                            </p>
                        </FadeUp>

                        <FadeUp delay={300} className="hidden lg:block">
                            <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-basquiat-black mb-4">
                                Need more details?
                            </p>
                            <a
                                href="/contact"
                                className="text-basquiat-blue hover:text-basquiat-gold transition-colors duration-300 font-medium flex items-center gap-2 group font-serif text-lg italic"
                            >
                                Contact our team
                                <span className="block transform group-hover:translate-x-1 transition-transform duration-300 not-italic">→</span>
                            </a>
                        </FadeUp>
                    </div>

                    {/* Right Column - FAQ List */}
                    <div className="lg:col-span-8">
                        <div className="border-t border-gray-200">
                            {faqs.map((faq, i) => (
                                <Cascade key={i} index={i}>
                                    <div className="border-b border-gray-200">
                                        <FAQItem question={faq.q} answer={faq.a} />
                                    </div>
                                </Cascade>
                            ))}
                        </div>

                        {/* Mobile Only CTA */}
                        <FadeUp delay={400} className="mt-12 lg:hidden">
                            <a
                                href="/contact"
                                className="inline-block border border-basquiat-black text-basquiat-black px-8 py-3 font-bold hover:bg-basquiat-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs"
                            >
                                Contact Us
                            </a>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </main>
    );
}
