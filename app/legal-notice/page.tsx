import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeUp, SlideLeft, GoldLine } from "@/components/Animate";

export default function LegalNoticePage() {
    const details = [
        { label: "Business Name", value: "Basquiat Capital" },
        { label: "Registered Company Name", value: "Basquiat Capital LLC" },
        { label: "Registration Location", value: "Wyoming, United States" },
        { label: "Registered Office", value: "30 N Gould St, Sheridan, Wyoming 82801, United States" },
        { label: "Phone Number", value: "+1 (650) 525-2452" },
        { label: "Email", value: "info@basquiatcapital.com" },
    ];

    return (
        <main className="flex flex-col min-h-screen bg-basquiat-white text-basquiat-black pt-20">

            {/* Hero */}
            <section className="bg-basquiat-blue text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SlideLeft delay={0}>
                        <h1 className="font-serif text-[42px] md:text-[64px] font-light tracking-tight leading-[0.9] mb-6">
                            Legal Notice
                        </h1>
                    </SlideLeft>
                    <GoldLine delay={150} centered={false} />
                    <FadeUp delay={300}>
                        <p className="font-sans text-[16px] font-light text-gray-300 max-w-2xl leading-relaxed mt-6">
                            Regulatory disclosures and corporate information for Basquiat Capital LLC.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <FadeUp delay={0}>
                        <div className="border-t-2 border-basquiat-gold pt-12">
                            <SlideLeft delay={0}>
                                <span className="font-sans text-[11px] uppercase tracking-widest text-basquiat-gold mb-6 block">
                                    Corporate Information
                                </span>
                            </SlideLeft>

                            <div className="divide-y divide-gray-100">
                                {details.map((item, i) => (
                                    <FadeUp key={i} delay={i * 80}>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 py-6">
                                            <div className="font-sans text-[11px] font-bold uppercase tracking-widest text-gray-400 pt-1">
                                                {item.label}
                                            </div>
                                            <div className="md:col-span-2 font-serif text-[18px] font-light text-basquiat-black">
                                                {item.value}
                                            </div>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={500}>
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-widest text-basquiat-blue hover:text-basquiat-gold transition-colors duration-300"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Home
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>

        </main>
    );
}
